import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function CompactTemplate({ data, accentColor = "#0f766e" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white px-8 py-7 font-sans text-[10px] leading-[1.55] text-gray-700">
      {/* Header */}
      <div className="mb-4 border-b-2 pb-3" style={{ borderColor: accentColor }}>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              {data.basics.name}
            </h1>
            <p className="mt-0.5 text-[11px] font-semibold" style={{ color: accentColor }}>
              {data.basics.headline}
            </p>
          </div>
          <div className="text-right text-[9px] text-gray-500 space-y-0.5">
            {data.basics.email && <p>{data.basics.email}</p>}
            {data.basics.phone && <p>{data.basics.phone}</p>}
            {data.basics.location && <p>{data.basics.location}</p>}
            {data.basics.linkedin && <p>{data.basics.linkedin}</p>}
            {data.basics.website && <p>{data.basics.website}</p>}
          </div>
        </div>
      </div>

      {/* Summary */}
      {data.basics.summary && (
        <p className="mb-4 text-[10px] leading-relaxed text-gray-500">
          {data.basics.summary}
        </p>
      )}

      <div className="flex gap-6">
        {/* Left: Experience + Projects */}
        <div className="flex-1 min-w-0">
          {data.experience.length > 0 && (
            <section className="mb-4">
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Experience
              </h2>
              <div className="space-y-2.5">
                {data.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-[11px] font-bold text-gray-900">{exp.position}</h3>
                      <span className="shrink-0 text-[8.5px] text-gray-400">
                        {exp.startDate} – {exp.endDate}
                      </span>
                    </div>
                    <p className="text-[9.5px] text-gray-500">
                      {exp.company}{exp.location && ` · ${exp.location}`}
                    </p>
                    {exp.highlights.length > 0 && (
                      <ul className="mt-1 space-y-0.5">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-1.5 text-[9.5px] text-gray-600">
                            <span
                              className="mt-[5px] h-1 w-1 shrink-0 rounded-full"
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

          {data.projects.length > 0 && (
            <section className="mb-4">
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Projects
              </h2>
              <div className="space-y-2">
                {data.projects.map((proj) => (
                  <div key={proj.id}>
                    <h3 className="text-[11px] font-bold text-gray-900">{proj.name}</h3>
                    <p className="text-[9.5px] text-gray-500">{proj.description}</p>
                    {proj.highlights.length > 0 && (
                      <ul className="mt-0.5 space-y-0.5">
                        {proj.highlights.map((h, i) => (
                          <li key={i} className="flex gap-1.5 text-[9.5px] text-gray-600">
                            <span
                              className="mt-[5px] h-1 w-1 shrink-0 rounded-full"
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

        {/* Right sidebar */}
        <div className="w-[185px] shrink-0 space-y-4">
          {data.education.length > 0 && (
            <section>
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Education
              </h2>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id}>
                    <h3 className="text-[10px] font-bold text-gray-900">{edu.institution}</h3>
                    <p className="text-[9px] text-gray-500">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-[8.5px] text-gray-400">
                      {edu.startDate} – {edu.endDate}
                      {edu.gpa && ` · GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.skills.length > 0 && (
            <section>
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Skills
              </h2>
              <div className="space-y-1.5">
                {data.skills.map((group, i) => (
                  <div key={i}>
                    <p className="text-[8.5px] font-semibold uppercase tracking-wider text-gray-400">
                      {group.category}
                    </p>
                    <div className="mt-0.5 flex flex-wrap gap-1">
                      {group.items.map((item, j) => (
                        <span
                          key={j}
                          className="rounded px-1.5 py-0.5 text-[8px] font-medium"
                          style={{ backgroundColor: `${accentColor}10`, color: accentColor }}
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

          {data.certifications.length > 0 && (
            <section>
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Certifications
              </h2>
              <div className="space-y-1">
                {data.certifications.map((cert, i) => (
                  <div key={i}>
                    <p className="text-[9px] font-semibold text-gray-800">{cert.name}</p>
                    <p className="text-[8.5px] text-gray-400">{cert.issuer} · {cert.date}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.languages.length > 0 && (
            <section>
              <h2
                className="mb-2 text-[9px] font-bold uppercase tracking-[0.15em] pb-1 border-b"
                style={{ color: accentColor, borderColor: `${accentColor}25` }}
              >
                Languages
              </h2>
              <div className="space-y-0.5">
                {data.languages.map((lang, i) => (
                  <p key={i} className="text-[9px] text-gray-600">
                    <span className="font-medium">{lang.language}</span>
                    <span className="text-gray-400"> — {lang.proficiency}</span>
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
