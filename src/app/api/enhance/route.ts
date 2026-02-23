import { NextRequest, NextResponse } from "next/server";
import { openai, ENHANCE_PROMPT } from "@/lib/openai";

export async function POST(request: NextRequest) {
  try {
    const { content, type } = await request.json();

    if (!content || typeof content !== "string") {
      return NextResponse.json(
        { error: "Content is required" },
        { status: 400 }
      );
    }

    let prompt = ENHANCE_PROMPT;
    if (type === "summary") {
      prompt += "\n\nImprove this professional summary to be compelling and concise (2-3 sentences max):";
    } else if (type === "bullets") {
      prompt +=
        "\n\nImprove these resume bullet points. Start each with a strong action verb and quantify results where possible. Return one bullet per line, no bullet markers:";
    } else {
      prompt += "\n\nImprove this resume text:";
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: prompt },
        { role: "user", content },
      ],
      temperature: 0.3,
      max_tokens: 1000,
    });

    const enhanced = completion.choices[0]?.message?.content?.trim();
    if (!enhanced) {
      return NextResponse.json(
        { error: "AI failed to generate enhanced content" },
        { status: 500 }
      );
    }

    return NextResponse.json({ enhanced });
  } catch (error) {
    console.error("Enhancement error:", error);
    return NextResponse.json(
      { error: "Enhancement failed" },
      { status: 500 }
    );
  }
}
