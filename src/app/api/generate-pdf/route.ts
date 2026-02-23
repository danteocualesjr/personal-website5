import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import { createPDFDocument } from "@/lib/pdf-templates";
import { resumeDataSchema } from "@/lib/resume-schema";
import { TemplateId } from "@/types/resume";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { resumeData, templateId, accentColor } = body;

    if (!resumeData || !templateId) {
      return NextResponse.json(
        { error: "resumeData and templateId are required" },
        { status: 400 }
      );
    }

    const validated = resumeDataSchema.parse(resumeData);
    const color = accentColor || "#2563eb";
    const document = createPDFDocument(
      templateId as TemplateId,
      validated,
      color
    );

    const buffer = await renderToBuffer(document);
    const uint8 = new Uint8Array(buffer);

    return new NextResponse(uint8, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="resume.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "PDF generation failed",
      },
      { status: 500 }
    );
  }
}
