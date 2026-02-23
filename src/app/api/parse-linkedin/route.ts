import { NextRequest, NextResponse } from "next/server";
import { extractTextFromPDF } from "@/lib/pdf-parser";
import { openai, LINKEDIN_PARSE_PROMPT } from "@/lib/openai";
import { resumeDataSchema } from "@/lib/resume-schema";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    if (file.type !== "application/pdf") {
      return NextResponse.json(
        { error: "File must be a PDF" },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const rawText = await extractTextFromPDF(buffer);

    if (!rawText || rawText.trim().length < 50) {
      return NextResponse.json(
        { error: "Could not extract enough text from the PDF. Please ensure it is a valid LinkedIn profile PDF." },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: LINKEDIN_PARSE_PROMPT },
        {
          role: "user",
          content: `Here is the raw text extracted from a LinkedIn profile PDF:\n\n${rawText}`,
        },
      ],
      temperature: 0.1,
      max_tokens: 4000,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "AI failed to generate a response" },
        { status: 500 }
      );
    }

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "AI returned an invalid response format" },
        { status: 500 }
      );
    }

    const parsed = JSON.parse(jsonMatch[0]);
    const validated = resumeDataSchema.parse(parsed);

    return NextResponse.json(validated);
  } catch (error) {
    console.error("Parse error:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Failed to parse AI response as JSON" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
