import { ResumeData, TemplateId } from "@/types/resume";
import { ModernTemplate } from "./modern-template";
import { ClassicTemplate } from "./classic-template";
import { MinimalTemplate } from "./minimal-template";
import { BoldTemplate } from "./bold-template";
import { ExecutiveTemplate } from "./executive-template";
import { CompactTemplate } from "./compact-template";
import { CreativeTemplate } from "./creative-template";
import { TimelineTemplate } from "./timeline-template";

interface TemplateRendererProps {
  templateId: TemplateId;
  data: ResumeData;
  accentColor?: string;
}

export function TemplateRenderer({ templateId, data, accentColor }: TemplateRendererProps) {
  switch (templateId) {
    case "modern":
      return <ModernTemplate data={data} accentColor={accentColor} />;
    case "classic":
      return <ClassicTemplate data={data} accentColor={accentColor} />;
    case "minimal":
      return <MinimalTemplate data={data} accentColor={accentColor} />;
    case "bold":
      return <BoldTemplate data={data} accentColor={accentColor} />;
    case "executive":
      return <ExecutiveTemplate data={data} accentColor={accentColor} />;
    case "compact":
      return <CompactTemplate data={data} accentColor={accentColor} />;
    case "creative":
      return <CreativeTemplate data={data} accentColor={accentColor} />;
    case "timeline":
      return <TimelineTemplate data={data} accentColor={accentColor} />;
    default:
      return <ModernTemplate data={data} accentColor={accentColor} />;
  }
}

export { ModernTemplate } from "./modern-template";
export { ClassicTemplate } from "./classic-template";
export { MinimalTemplate } from "./minimal-template";
export { BoldTemplate } from "./bold-template";
export { ExecutiveTemplate } from "./executive-template";
export { CompactTemplate } from "./compact-template";
export { CreativeTemplate } from "./creative-template";
export { TimelineTemplate } from "./timeline-template";
