import { ResumeData } from "@/types/resume";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  FolderOpen,
} from "lucide-react";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function ModernTemplate({ data, accentColor = "#2563eb" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white font-sans text-[11px] leading-relaxed text-gray-800">
      {/* Header */}
      <div className="px-10 pt-8 pb-6" style={{ borderBottom: `3px solid ${accentColor}` }}>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {data.basics.name}
        </h1>
        <p className="mt-1 text-sm font-medium" style={{ color: accentColor }}>
          {data.basics.headline}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-gray-500">
          {data.basics.email && (
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3" /> {data.basics.email}
            </span>
          )}
          {data.basics.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" /> {data.basics.phone}
            </span>
          )}
          {data.basics.location && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> {data.basics.location}
            </span>
          )}
          {data.basics.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="h-3 w-3" /> {data.basics.linkedin}
            </span>
          )}
          {data.basics.website && (
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3" /> {data.basics.website}
            </span>
          )}
        </div>
      </div>

      <div className="flex gap-8 px-10 py-6">
        {/* Main Column */}
        <div className="flex-1 min-w-0">
          {/* Summary */}
          {data.basics.summary && (
            <section className="mb-5">
              <p className="text-[11px] leading-relaxed text-gray-600">
                {data.basics.summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience.length > 0 && (
            <section className="mb-5">
              <h2
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                <Briefcase className="h-3.5 w-3.5" /> Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-[12px] font-bold text-gray-900">
                          {exp.position}
                        </h3>
                        <p className="text-[11px] font-medium text-gray-600">
                          {exp.company}
                          {exp.location && ` · ${exp.location}`}
                        </p>
                      </div>
                      <span className="shrink-0 text-[10px] text-gray-400">
                        {exp.startDate} — {exp.endDate}
                      </span>
                    </div>
                    {exp.highlights.length > 0 && (
                      <ul className="mt-1.5 space-y-0.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2 text-gray-600">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                              style={{ backgroundColor: accentColor }}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.projects.length > 0 && (
            <section className="mb-5">
              <h2
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                <FolderOpen className="h-3.5 w-3.5" /> Projects
              </h2>
              <div className="space-y-3">
                {data.projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="text-[12px] font-bold text-gray-900">
                      {proj.name}
                    </h3>
                    <p className="text-gray-600">{proj.description}</p>
                    {proj.highlights.length > 0 && (
                      <ul className="mt-1 space-y-0.5">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2 text-gray-600">
                            <span
                              className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                              style={{ backgroundColor: accentColor }}
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-48 shrink-0">
          {/* Education */}
          {data.education.length > 0 && (
            <section className="mb-5">
              <h2
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                <GraduationCap className="h-3.5 w-3.5" /> Education
              </h2>
              <div className="space-y-3">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="text-[11px] font-bold text-gray-900">
                      {edu.institution}
                    </h3>
                    <p className="text-[10px] text-gray-600">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {edu.startDate} — {edu.endDate}
                    </p>
                    {edu.gpa && (
                      <p className="text-[10px] text-gray-400">GPA: {edu.gpa}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills.length > 0 && (
            <section className="mb-5">
              <h2
                className="mb-3 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                Skills
              </h2>
              <div className="space-y-2.5">
                {data.skills.map((group, i) => (
                  <div key={i}>
                    <h3 className="text-[10px] font-semibold text-gray-700">
                      {group.category}
                    </h3>
                    <p className="text-[10px] text-gray-500">
                      {group.items.join(" · ")}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section className="mb-5">
              <h2
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                <Award className="h-3.5 w-3.5" /> Certifications
              </h2>
              <div className="space-y-2">
                {data.certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-semibold text-gray-800">
                      {cert.name}
                    </p>
                    <p className="text-[10px] text-gray-500">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {data.languages.length > 0 && (
            <section>
              <h2
                className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                <Languages className="h-3.5 w-3.5" /> Languages
              </h2>
              <div className="space-y-1">
                {data.languages.map((lang, i) => (
                  <p key={i} className="text-[10px] text-gray-600">
                    <span className="font-medium">{lang.language}</span> —{" "}
                    {lang.proficiency}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
