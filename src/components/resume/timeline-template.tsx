import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function TimelineTemplate({ data, accentColor = "#0369a1" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white px-10 py-8 font-sans text-[11px] leading-relaxed text-gray-700">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          {data.basics.name}
        </h1>
        <p className="mt-1 text-[12px] font-medium" style={{ color: accentColor }}>
          {data.basics.headline}
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] text-gray-400">
          {data.basics.email && <span>{data.basics.email}</span>}
          {data.basics.phone && <span>{data.basics.phone}</span>}
          {data.basics.location && <span>{data.basics.location}</span>}
          {data.basics.linkedin && <span>{data.basics.linkedin}</span>}
          {data.basics.website && <span>{data.basics.website}</span>}
        </div>
      </div>

      {/* Divider */}
      <div className="mb-5 h-0.5 rounded-full" style={{ backgroundColor: accentColor }} />

      {/* Summary */}
      {data.basics.summary && (
        <p className="mb-6 text-center text-[10.5px] leading-relaxed text-gray-500 max-w-xl mx-auto">
          {data.basics.summary}
        </p>
      )}

      {/* Experience with timeline */}
      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2
            className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em]"
            style={{ color: accentColor }}
          >
            Experience
          </h2>
          <div className="relative ml-3">
            {/* Timeline rail */}
            <div
              className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full"
              style={{ backgroundColor: `${accentColor}20` }}
            />
            <div className="space-y-5 pl-6">
              {data.experience.map((exp, idx) => (
                <div key={exp.id} className="relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-6 top-1 h-2.5 w-2.5 rounded-full border-2 bg-white"
                    style={{
                      borderColor: accentColor,
                      backgroundColor: idx === 0 ? accentColor : "white",
                    }}
                  />
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[12px] font-bold text-gray-900">{exp.position}</h3>
                    <span className="shrink-0 rounded-full px-2 py-0.5 text-[8.5px] font-medium" style={{ backgroundColor: `${accentColor}10`, color: accentColor }}>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-500">
                    {exp.company}{exp.location && ` · ${exp.location}`}
                  </p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-1.5 space-y-0.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-[10px] text-gray-600">
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
          </div>
        </section>
      )}

      <div className="flex gap-10">
        {/* Education with mini timeline */}
        {data.education.length > 0 && (
          <section className="mb-6 flex-1">
            <h2
              className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Education
            </h2>
            <div className="relative ml-3">
              <div
                className="absolute left-0 top-1 bottom-1 w-0.5 rounded-full"
                style={{ backgroundColor: `${accentColor}20` }}
              />
              <div className="space-y-3 pl-6">
                {data.education.map((edu) => (
                  <div key={edu.id} className="relative">
                    <div
                      className="absolute -left-6 top-1 h-2 w-2 rounded-full border-2 bg-white"
                      style={{ borderColor: accentColor }}
                    />
                    <h3 className="text-[11px] font-bold text-gray-900">{edu.institution}</h3>
                    <p className="text-[10px] text-gray-500">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-[9px] text-gray-400">
                      {edu.startDate} – {edu.endDate}
                      {edu.gpa && ` · GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills */}
        {data.skills.length > 0 && (
          <section className="mb-6 w-[240px] shrink-0">
            <h2
              className="mb-4 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Skills
            </h2>
            <div className="space-y-2.5">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <p className="text-[8.5px] font-semibold uppercase tracking-wider text-gray-400">
                    {group.category}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {group.items.map((item, j) => (
                      <span
                        key={j}
                        className="rounded-full px-2 py-0.5 text-[8px] font-medium"
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
      </div>

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2
            className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em]"
            style={{ color: accentColor }}
          >
            Projects
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((proj) => (
              <div
                key={proj.id}
                className="rounded-lg border p-3"
                style={{ borderColor: `${accentColor}15` }}
              >
                <h3 className="text-[11px] font-bold text-gray-900">{proj.name}</h3>
                <p className="mt-0.5 text-[9.5px] text-gray-500">{proj.description}</p>
                {proj.highlights.length > 0 && (
                  <ul className="mt-1.5 space-y-0.5">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="flex gap-1.5 text-[9px] text-gray-600">
                        <span
                          className="mt-[4px] h-1 w-1 shrink-0 rounded-full"
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

      {/* Bottom row: Certifications + Languages */}
      <div className="flex gap-10">
        {data.certifications.length > 0 && (
          <section className="flex-1">
            <h2
              className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Certifications
            </h2>
            <div className="space-y-1">
              {data.certifications.map((cert, i) => (
                <p key={i} className="text-[10px]">
                  <span className="font-semibold text-gray-800">{cert.name}</span>
                  <span className="text-gray-400"> — {cert.issuer} · {cert.date}</span>
                </p>
              ))}
            </div>
          </section>
        )}

        {data.languages.length > 0 && (
          <section className="shrink-0">
            <h2
              className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em]"
              style={{ color: accentColor }}
            >
              Languages
            </h2>
            <div className="space-y-0.5">
              {data.languages.map((lang, i) => (
                <p key={i} className="text-[10px] text-gray-600">
                  <span className="font-medium">{lang.language}</span> — {lang.proficiency}
                </p>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
