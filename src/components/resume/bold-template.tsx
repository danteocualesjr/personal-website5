import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function BoldTemplate({ data, accentColor = "#dc2626" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white font-sans text-[11px] leading-relaxed text-gray-800">
      {/* Header */}
      <div className="px-10 pt-8 pb-5" style={{ backgroundColor: accentColor }}>
        <h1 className="text-3xl font-black uppercase tracking-wider text-white">
          {data.basics.name}
        </h1>
        <p className="mt-1 text-sm font-medium tracking-wide text-white/80">
          {data.basics.headline}
        </p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-0.5 text-[10px] text-white/70">
          {data.basics.email && <span>{data.basics.email}</span>}
          {data.basics.phone && <span>{data.basics.phone}</span>}
          {data.basics.location && <span>{data.basics.location}</span>}
          {data.basics.linkedin && <span>{data.basics.linkedin}</span>}
          {data.basics.website && <span>{data.basics.website}</span>}
        </div>
      </div>

      <div className="px-10 py-6">
        {/* Summary */}
        {data.basics.summary && (
          <section className="mb-5 rounded-lg bg-gray-50 p-4">
            <p className="text-gray-600 leading-relaxed">{data.basics.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-5">
            <h2
              className="mb-3 text-sm font-black uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div key={exp.id} className="border-l-3 pl-4" style={{ borderColor: accentColor }}>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[12px] font-bold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-[11px] font-semibold" style={{ color: accentColor }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="text-[10px] font-medium text-gray-500">
                        {exp.startDate} — {exp.endDate}
                      </span>
                      {exp.location && (
                        <p className="text-[10px] text-gray-400">{exp.location}</p>
                      )}
                    </div>
                  </div>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-gray-600">
                          <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: accentColor }} />
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

        <div className="flex gap-8">
          <div className="flex-1 min-w-0">
            {/* Education */}
            {data.education.length > 0 && (
              <section className="mb-5">
                <h2
                  className="mb-3 text-sm font-black uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Education
                </h2>
                <div className="space-y-3">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <h3 className="text-[12px] font-bold text-gray-900">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600">
                        {edu.degree} in {edu.field}
                        {edu.gpa && (
                          <span className="ml-2 font-semibold" style={{ color: accentColor }}>
                            GPA: {edu.gpa}
                          </span>
                        )}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {edu.startDate} — {edu.endDate}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Projects */}
            {data.projects.length > 0 && (
              <section className="mb-5">
                <h2
                  className="mb-3 text-sm font-black uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Projects
                </h2>
                <div className="space-y-3">
                  {data.projects.map((proj) => (
                    <div key={proj.id}>
                      <h3 className="text-[12px] font-bold text-gray-900">{proj.name}</h3>
                      <p className="text-gray-600">{proj.description}</p>
                      {proj.highlights.length > 0 && (
                        <ul className="mt-1 space-y-0.5">
                          {proj.highlights.map((h, i) => (
                            <li key={i} className="flex gap-2 text-gray-600">
                              <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rotate-45" style={{ backgroundColor: accentColor }} />
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

          <div className="w-52 shrink-0">
            {/* Skills */}
            {data.skills.length > 0 && (
              <section className="mb-5">
                <h2
                  className="mb-3 text-sm font-black uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Skills
                </h2>
                <div className="space-y-2.5">
                  {data.skills.map((group, i) => (
                    <div key={i}>
                      <h3 className="text-[10px] font-bold uppercase tracking-wide text-gray-900">
                        {group.category}
                      </h3>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {group.items.map((item, j) => (
                          <span
                            key={j}
                            className="rounded px-1.5 py-0.5 text-[9px] font-medium text-white"
                            style={{ backgroundColor: accentColor }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Certifications */}
            {data.certifications.length > 0 && (
              <section className="mb-5">
                <h2
                  className="mb-3 text-sm font-black uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Certs
                </h2>
                <div className="space-y-2">
                  {data.certifications.map((cert, i) => (
                    <div key={i}>
                      <p className="text-[10px] font-bold text-gray-800">{cert.name}</p>
                      <p className="text-[10px] text-gray-500">{cert.issuer} · {cert.date}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Languages */}
            {data.languages.length > 0 && (
              <section>
                <h2
                  className="mb-2 text-sm font-black uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  Languages
                </h2>
                <div className="space-y-0.5">
                  {data.languages.map((lang, i) => (
                    <p key={i} className="text-[10px] text-gray-600">
                      <span className="font-bold">{lang.language}</span> — {lang.proficiency}
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
