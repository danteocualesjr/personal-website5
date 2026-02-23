import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function MinimalTemplate({ data, accentColor = "#374151" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white px-14 py-12 font-sans text-[11px] leading-relaxed text-gray-700">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-light tracking-tight text-gray-900">
          {data.basics.name}
        </h1>
        <p className="mt-1 text-sm font-light tracking-wide text-gray-500">
          {data.basics.headline}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-gray-400">
          {data.basics.email && <span>{data.basics.email}</span>}
          {data.basics.phone && <span>{data.basics.phone}</span>}
          {data.basics.location && <span>{data.basics.location}</span>}
          {data.basics.linkedin && <span>{data.basics.linkedin}</span>}
          {data.basics.website && <span>{data.basics.website}</span>}
        </div>
      </div>

      {/* Summary */}
      {data.basics.summary && (
        <section className="mb-8">
          <p className="text-gray-500 leading-relaxed">{data.basics.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mb-8">
          <h2
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accentColor }}
          >
            Experience
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-[12px] font-medium text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-400">
                      {exp.company}
                      {exp.location && ` — ${exp.location}`}
                    </p>
                  </div>
                  <span className="shrink-0 text-[10px] text-gray-300">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                {exp.highlights.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-gray-500">
                        <span className="mt-1.5 h-0.5 w-3 shrink-0 rounded" style={{ backgroundColor: accentColor, opacity: 0.3 }} />
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

      {/* Education */}
      {data.education.length > 0 && (
        <section className="mb-8">
          <h2
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accentColor }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[12px] font-medium text-gray-900">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-400">
                    {edu.institution}
                    {edu.gpa && ` — GPA: ${edu.gpa}`}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] text-gray-300">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-12">
        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-8 flex-1">
            <h2
              className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Skills
            </h2>
            <div className="space-y-2">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    {group.category}
                  </p>
                  <p className="text-gray-600">{group.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="shrink-0 space-y-6">
          {/* Certifications */}
          {data.certifications.length > 0 && (
            <section>
              <h2
                className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: accentColor }}
              >
                Certifications
              </h2>
              <div className="space-y-1.5">
                {data.certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="text-[10px] font-medium text-gray-700">{cert.name}</p>
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
                className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: accentColor }}
              >
                Languages
              </h2>
              <div className="space-y-0.5">
                {data.languages.map((lang, i) => (
                  <p key={i} className="text-[10px] text-gray-500">
                    {lang.language} — {lang.proficiency}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mt-2">
          <h2
            className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: accentColor }}
          >
            Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="text-[12px] font-medium text-gray-900">
                  {proj.name}
                </h3>
                <p className="text-gray-500">{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
