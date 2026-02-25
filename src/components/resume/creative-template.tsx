import { ResumeData } from "@/types/resume";
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

interface Props {
  data: ResumeData;
  accentColor?: string;
}

export function CreativeTemplate({ data, accentColor = "#7c3aed" }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-[816px] bg-white font-sans text-[11px] leading-relaxed text-gray-700">
      {/* Sidebar */}
      <div className="w-[240px] shrink-0 px-6 py-8 text-white" style={{ backgroundColor: accentColor }}>
        {/* Name */}
        <div className="mb-8">
          <h1 className="text-xl font-bold tracking-tight text-white leading-tight">
            {data.basics.name}
          </h1>
          <p className="mt-1 text-[11px] font-medium text-white/75">
            {data.basics.headline}
          </p>
        </div>

        {/* Contact */}
        <div className="mb-8 space-y-2 text-[9.5px]">
          {data.basics.email && (
            <div className="flex items-center gap-2 text-white/80">
              <Mail className="h-3 w-3 shrink-0 text-white/50" />
              <span className="break-all">{data.basics.email}</span>
            </div>
          )}
          {data.basics.phone && (
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="h-3 w-3 shrink-0 text-white/50" />
              <span>{data.basics.phone}</span>
            </div>
          )}
          {data.basics.location && (
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="h-3 w-3 shrink-0 text-white/50" />
              <span>{data.basics.location}</span>
            </div>
          )}
          {data.basics.linkedin && (
            <div className="flex items-center gap-2 text-white/80">
              <Linkedin className="h-3 w-3 shrink-0 text-white/50" />
              <span className="break-all">{data.basics.linkedin}</span>
            </div>
          )}
          {data.basics.website && (
            <div className="flex items-center gap-2 text-white/80">
              <Globe className="h-3 w-3 shrink-0 text-white/50" />
              <span className="break-all">{data.basics.website}</span>
            </div>
          )}
        </div>

        {/* Skills */}
        {data.skills.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
              Skills
            </h2>
            <div className="space-y-3">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <p className="text-[8.5px] font-semibold uppercase tracking-wider text-white/60">
                    {group.category}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {group.items.map((item, j) => (
                      <span
                        key={j}
                        className="rounded bg-white/15 px-1.5 py-0.5 text-[8px] font-medium text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {data.education.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <p className="text-[10px] font-bold text-white">{edu.institution}</p>
                  <p className="text-[9px] text-white/70">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-[8.5px] text-white/50">
                    {edu.startDate} – {edu.endDate}
                    {edu.gpa && ` · GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages */}
        {data.languages.length > 0 && (
          <div className="mb-8">
            <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
              Languages
            </h2>
            <div className="space-y-1">
              {data.languages.map((lang, i) => (
                <p key={i} className="text-[9px] text-white/80">
                  <span className="font-medium text-white">{lang.language}</span>{" "}
                  — {lang.proficiency}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Certifications */}
        {data.certifications.length > 0 && (
          <div>
            <h2 className="mb-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
              Certifications
            </h2>
            <div className="space-y-2">
              {data.certifications.map((cert, i) => (
                <div key={i}>
                  <p className="text-[9px] font-semibold text-white">{cert.name}</p>
                  <p className="text-[8.5px] text-white/60">{cert.issuer} · {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 px-8 py-8">
        {/* Summary */}
        {data.basics.summary && (
          <section className="mb-6 border-b pb-5" style={{ borderColor: `${accentColor}15` }}>
            <p className="text-[11px] leading-relaxed text-gray-500">{data.basics.summary}</p>
          </section>
        )}

        {/* Experience */}
        {data.experience.length > 0 && (
          <section className="mb-6">
            <h2
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em]"
              style={{ color: accentColor }}
            >
              Experience
            </h2>
            <div className="space-y-5">
              {data.experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[12px] font-bold text-gray-900">{exp.position}</h3>
                    <span className="shrink-0 text-[9px] text-gray-400">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-[10px] font-medium text-gray-500">
                    {exp.company}{exp.location && ` · ${exp.location}`}
                  </p>
                  {exp.highlights.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-[10px] text-gray-600">
                          <span
                            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
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
          <section>
            <h2
              className="mb-4 text-[10px] font-bold uppercase tracking-[0.15em]"
              style={{ color: accentColor }}
            >
              Projects
            </h2>
            <div className="space-y-4">
              {data.projects.map((proj) => (
                <div key={proj.id}>
                  <h3 className="text-[12px] font-bold text-gray-900">{proj.name}</h3>
                  <p className="text-[10px] text-gray-500">{proj.description}</p>
                  {proj.highlights.length > 0 && (
                    <ul className="mt-1 space-y-0.5">
                      {proj.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-[10px] text-gray-600">
                          <span
                            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
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
    </div>
  );
}
