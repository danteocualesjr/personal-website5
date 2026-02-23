import { ResumeData } from "@/types/resume";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function ClassicTemplate({ data, accentColor = "#1e3a5f" }: Props) {
  return (
    <div className="mx-auto w-full max-w-[816px] bg-white px-12 py-10 font-serif text-[11px] leading-relaxed text-gray-800">
      {/* Header */}
      <div className="border-b-2 pb-4 text-center" style={{ borderColor: accentColor }}>
        <h1 className="text-3xl font-bold tracking-wide" style={{ color: accentColor }}>
          {data.basics.name}
        </h1>
        <p className="mt-1 text-sm italic text-gray-600">{data.basics.headline}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[10px] text-gray-500">
          {data.basics.email && <span>{data.basics.email}</span>}
          {data.basics.phone && (
            <>
              <span>|</span>
              <span>{data.basics.phone}</span>
            </>
          )}
          {data.basics.location && (
            <>
              <span>|</span>
              <span>{data.basics.location}</span>
            </>
          )}
          {data.basics.linkedin && (
            <>
              <span>|</span>
              <span>{data.basics.linkedin}</span>
            </>
          )}
          {data.basics.website && (
            <>
              <span>|</span>
              <span>{data.basics.website}</span>
            </>
          )}
        </div>
      </div>

      {/* Summary */}
      {data.basics.summary && (
        <section className="mt-5">
          <h2
            className="mb-2 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Professional Summary
          </h2>
          <p className="text-gray-600">{data.basics.summary}</p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section className="mt-5">
          <h2
            className="mb-3 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Professional Experience
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[12px] font-bold" style={{ color: accentColor }}>
                    {exp.position}
                  </h3>
                  <span className="shrink-0 text-[10px] italic text-gray-400">
                    {exp.startDate} — {exp.endDate}
                  </span>
                </div>
                <p className="text-[11px] italic text-gray-600">
                  {exp.company}{exp.location && `, ${exp.location}`}
                </p>
                {exp.highlights.length > 0 && (
                  <ul className="mt-1.5 space-y-0.5 pl-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="list-disc text-gray-600">
                        {h}
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
        <section className="mt-5">
          <h2
            className="mb-3 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Education
          </h2>
          <div className="space-y-3">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-[12px] font-bold" style={{ color: accentColor }}>
                    {edu.institution}
                  </h3>
                  <p className="text-gray-600">
                    {edu.degree} in {edu.field}
                    {edu.gpa && ` — GPA: ${edu.gpa}`}
                  </p>
                </div>
                <span className="shrink-0 text-[10px] italic text-gray-400">
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section className="mt-5">
          <h2
            className="mb-3 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Skills
          </h2>
          <div className="space-y-1.5">
            {data.skills.map((group, i) => (
              <p key={i} className="text-gray-600">
                <span className="font-semibold text-gray-800">{group.category}:</span>{" "}
                {group.items.join(", ")}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <section className="mt-5">
          <h2
            className="mb-3 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Certifications
          </h2>
          <div className="space-y-1">
            {data.certifications.map((cert, i) => (
              <p key={i} className="text-gray-600">
                <span className="font-semibold">{cert.name}</span> — {cert.issuer} ({cert.date})
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section className="mt-5">
          <h2
            className="mb-3 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Projects
          </h2>
          <div className="space-y-3">
            {data.projects.map((proj) => (
              <div key={proj.id}>
                <h3 className="text-[12px] font-bold" style={{ color: accentColor }}>
                  {proj.name}
                </h3>
                <p className="text-gray-600">{proj.description}</p>
                {proj.highlights.length > 0 && (
                  <ul className="mt-1 space-y-0.5 pl-4">
                    {proj.highlights.map((h, i) => (
                      <li key={i} className="list-disc text-gray-600">{h}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Languages */}
      {data.languages.length > 0 && (
        <section className="mt-5">
          <h2
            className="mb-2 border-b text-xs font-bold uppercase tracking-widest"
            style={{ color: accentColor, borderColor: `${accentColor}40` }}
          >
            Languages
          </h2>
          <p className="text-gray-600">
            {data.languages.map((l) => `${l.language} (${l.proficiency})`).join(" · ")}
          </p>
        </section>
      )}
    </div>
  );
}
