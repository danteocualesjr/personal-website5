import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function ExecutiveTemplate({ data, accentColor = "#6b5b47" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white font-sans text-[11px] leading-relaxed text-gray-700">
      {/* Header */}
      <div className="px-12 pt-10 pb-6">
        <div className="flex items-end justify-between border-b-2 pb-4" style={{ borderColor: accentColor }}>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight" style={{ color: accentColor }}>
              {data.basics.name}
            </h1>
            <p className="mt-0.5 text-sm text-gray-500">{data.basics.headline}</p>
          </div>
          <div className="text-right text-[10px] text-gray-400 space-y-0.5">
            {data.basics.email && <p>{data.basics.email}</p>}
            {data.basics.phone && <p>{data.basics.phone}</p>}
            {data.basics.location && <p>{data.basics.location}</p>}
            {data.basics.linkedin && <p>{data.basics.linkedin}</p>}
            {data.basics.website && <p>{data.basics.website}</p>}
          </div>
        </div>
      </div>

      <div className="px-12 pb-10">
        {/* Executive Summary */}
        {data.basics.summary && (
          <section className="mb-6">
            <h2
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: accentColor }}
            >
              Executive Summary
            </h2>
            <p className="text-gray-600 leading-relaxed">{data.basics.summary}</p>
          </section>
        )}

        {/* Key Competencies (Skills inline) */}
        {data.skills.length > 0 && (
          <section className="mb-6 rounded border p-4" style={{ borderColor: `${accentColor}30`, backgroundColor: `${accentColor}05` }}>
            <h2
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: accentColor }}
            >
              Key Competencies
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-1.5">
              {data.skills.flatMap((g) => g.items).map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-[10px] text-gray-600">
                  <span className="h-1 w-1 rounded-full" style={{ backgroundColor: accentColor }} />
                  {item}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Professional Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6">
            <h2
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: accentColor }}
            >
              Professional Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[12px] font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-[11px]" style={{ color: accentColor }}>
                        {exp.company}
                        {exp.location && ` | ${exp.location}`}
                      </p>
                    </div>
                    <span className="shrink-0 rounded px-2 py-0.5 text-[10px] font-medium" style={{ backgroundColor: `${accentColor}10`, color: accentColor }}>
                      {exp.startDate} — {exp.endDate}
                    </span>
                  </div>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-gray-600">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accentColor }} />
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

        <div className="flex gap-10">
          <div className="flex-1 min-w-0">
            {/* Education */}
            {data.education.length > 0 && (
              <section className="mb-5">
                <h2
                  className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: accentColor }}
                >
                  Education
                </h2>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="text-[12px] font-semibold text-gray-900">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-gray-500">
                        {edu.institution} | {edu.startDate} — {edu.endDate}
                        {edu.gpa && ` | GPA: ${edu.gpa}`}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
              <section>
                <h2
                  className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: accentColor }}
                >
                  Notable Projects
                </h2>
                <div className="space-y-3">
                  {data.projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="text-[12px] font-semibold text-gray-900">{proj.name}</h3>
                      <p className="text-gray-500">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="w-44 shrink-0 space-y-5">
            {/* Certifications */}
            {data.certifications.length > 0 && (
              <section>
                <h2
                  className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: accentColor }}
                >
                  Certifications
                </h2>
                <div className="space-y-2">
                  {data.certifications.map((cert, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-semibold text-gray-700">{cert.name}</p>
                      <p className="text-[10px] text-gray-400">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {data.languages.length > 0 && (
              <section>
                <h2
                  className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em]"
                  style={{ color: accentColor }}
                >
                  Languages
                </h2>
                <div className="space-y-1">
                  {data.languages.map((lang, i) => (
                    <p key={i} className="text-[10px] text-gray-500">
                      <span className="font-medium text-gray-700">{lang.language}</span>
                      <br />
                      {lang.proficiency}
                    </p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
