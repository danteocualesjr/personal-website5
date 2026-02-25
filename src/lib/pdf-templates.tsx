import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { ResumeData, TemplateId } from "@/types/resume";

Font.register({
  family: "Inter",
  fonts: [
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfAZ9hjQ.ttf", fontWeight: 400 },
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fAZ9hjQ.ttf", fontWeight: 600 },
    { src: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYAZ9hjQ.ttf", fontWeight: 700 },
  ],
});

const baseStyles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 9,
    color: "#374151",
    lineHeight: 1.5,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  h3: { fontSize: 10, fontWeight: 700, color: "#111827" },
  subtitle: { fontSize: 9, color: "#6b7280" },
  small: { fontSize: 7.5, color: "#9ca3af" },
  bullet: { flexDirection: "row" as const, gap: 4, marginTop: 2 },
  bulletDot: { width: 3, height: 3, borderRadius: 1.5, marginTop: 4 },
  contactRow: { flexDirection: "row" as const, flexWrap: "wrap" as const, gap: 8, fontSize: 7.5, color: "#9ca3af" },
});

function SectionDivider({ color }: { color: string }) {
  return <View style={{ height: 1, backgroundColor: `${color}30`, marginVertical: 8 }} />;
}

function ModernPDF({ data, color }: { data: ResumeData; color: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 0 }]}>
        {/* Header */}
        <View style={{ paddingHorizontal: 36, paddingTop: 26, paddingBottom: 12, borderBottomWidth: 2, borderBottomColor: color }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: 600, color, marginTop: 3, lineHeight: 1.5 }}>{data.basics.headline}</Text>
          <View style={[baseStyles.contactRow, { marginTop: 6 }]}>
            {data.basics.email && <Text>{data.basics.email}</Text>}
            {data.basics.phone && <Text>{data.basics.phone}</Text>}
            {data.basics.location && <Text>{data.basics.location}</Text>}
            {data.basics.linkedin && <Text>{data.basics.linkedin}</Text>}
          </View>
        </View>

        <View wrap style={{ flexDirection: "row", paddingHorizontal: 36, paddingTop: 12, paddingBottom: 30, gap: 24 }}>
          {/* Main Col */}
          <View wrap style={{ flex: 1 }}>
            {data.basics.summary && <Text style={{ color: "#6b7280", marginBottom: 6 }}>{data.basics.summary}</Text>}

            {data.experience.length > 0 && (
              <View style={{ marginBottom: 6 }}>
                <Text minPresenceAhead={30} style={[baseStyles.sectionTitle, { color }]}>Experience</Text>
                {data.experience.map((exp) => (
                  <View key={exp.id} wrap={false} style={{ marginBottom: 4 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={baseStyles.h3}>{exp.position}</Text>
                      <Text style={baseStyles.small}>{exp.startDate} — {exp.endDate}</Text>
                    </View>
                    <Text style={baseStyles.subtitle}>{exp.company}{exp.location && ` · ${exp.location}`}</Text>
                    {exp.highlights.map((h, i) => (
                      <View key={i} style={baseStyles.bullet}>
                        <View style={[baseStyles.bulletDot, { backgroundColor: color }]} />
                        <Text style={{ flex: 1, color: "#6b7280" }}>{h}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}

            {data.projects.length > 0 && (
              <View>
                <Text minPresenceAhead={30} style={[baseStyles.sectionTitle, { color }]}>Projects</Text>
                {data.projects.map((proj) => (
                  <View key={proj.id} wrap={false} style={{ marginBottom: 4 }}>
                    <Text style={baseStyles.h3}>{proj.name}</Text>
                    <Text style={{ color: "#6b7280" }}>{proj.description}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Sidebar */}
          <View wrap={false} style={{ width: 150 }}>
            {data.education.length > 0 && (
              <View style={{ marginBottom: 12 }}>
                <Text style={[baseStyles.sectionTitle, { color }]}>Education</Text>
                {data.education.map((edu) => (
                  <View key={edu.id} style={{ marginBottom: 6 }}>
                    <Text style={[baseStyles.h3, { fontSize: 8.5 }]}>{edu.institution}</Text>
                    <Text style={{ fontSize: 7.5, color: "#6b7280" }}>{edu.degree} in {edu.field}</Text>
                    <Text style={baseStyles.small}>{edu.startDate} — {edu.endDate}</Text>
                  </View>
                ))}
              </View>
            )}

            {data.skills.length > 0 && (
              <View style={{ marginBottom: 12 }}>
                <Text style={[baseStyles.sectionTitle, { color }]}>Skills</Text>
                {data.skills.map((g, i) => (
                  <View key={i} style={{ marginBottom: 4 }}>
                    <Text style={{ fontSize: 7.5, fontWeight: 600, color: "#374151" }}>{g.category}</Text>
                    <Text style={{ fontSize: 7.5, color: "#9ca3af" }}>{g.items.join(" · ")}</Text>
                  </View>
                ))}
              </View>
            )}

            {data.certifications.length > 0 && (
              <View style={{ marginBottom: 12 }}>
                <Text style={[baseStyles.sectionTitle, { color }]}>Certifications</Text>
                {data.certifications.map((c, i) => (
                  <View key={i} style={{ marginBottom: 4 }}>
                    <Text style={{ fontSize: 7.5, fontWeight: 600 }}>{c.name}</Text>
                    <Text style={baseStyles.small}>{c.issuer}</Text>
                  </View>
                ))}
              </View>
            )}

            {data.languages.length > 0 && (
              <View>
                <Text style={[baseStyles.sectionTitle, { color }]}>Languages</Text>
                {data.languages.map((l, i) => (
                  <Text key={i} style={{ fontSize: 7.5, color: "#6b7280" }}>{l.language} — {l.proficiency}</Text>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function ClassicPDF({ data, color }: { data: ResumeData; color: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 40 }]}>
        <View style={{ textAlign: "center", borderBottomWidth: 2, borderBottomColor: color, paddingBottom: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 10, color: "#6b7280", fontStyle: "italic", marginTop: 2 }}>{data.basics.headline}</Text>
          <View style={[baseStyles.contactRow, { justifyContent: "center", marginTop: 4 }]}>
            {[data.basics.email, data.basics.phone, data.basics.location, data.basics.linkedin].filter(Boolean).map((item, i) => (
              <Text key={i}>{item}{i < 3 ? "  |  " : ""}</Text>
            ))}
          </View>
        </View>

        {data.basics.summary && (
          <View style={{ marginTop: 14 }}>
            <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}40`, paddingBottom: 2 }]}>Professional Summary</Text>
            <Text style={{ color: "#6b7280" }}>{data.basics.summary}</Text>
          </View>
        )}

        {data.experience.length > 0 && (
          <View style={{ marginTop: 14 }}>
            <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}40`, paddingBottom: 2 }]}>Professional Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={[baseStyles.h3, { color }]}>{exp.position}</Text>
                  <Text style={[baseStyles.small, { fontStyle: "italic" }]}>{exp.startDate} — {exp.endDate}</Text>
                </View>
                <Text style={[baseStyles.subtitle, { fontStyle: "italic" }]}>{exp.company}{exp.location ? `, ${exp.location}` : ""}</Text>
                {exp.highlights.map((h, i) => (
                  <View key={i} style={[baseStyles.bullet, { paddingLeft: 8 }]}>
                    <Text style={{ color: "#6b7280" }}>•  {h}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {data.education.length > 0 && (
          <View style={{ marginTop: 14 }}>
            <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}40`, paddingBottom: 2 }]}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 4 }}>
                <View>
                  <Text style={[baseStyles.h3, { color }]}>{edu.institution}</Text>
                  <Text style={{ color: "#6b7280" }}>{edu.degree} in {edu.field}{edu.gpa ? ` — GPA: ${edu.gpa}` : ""}</Text>
                </View>
                <Text style={[baseStyles.small, { fontStyle: "italic" }]}>{edu.startDate} — {edu.endDate}</Text>
              </View>
            ))}
          </View>
        )}

        {data.skills.length > 0 && (
          <View style={{ marginTop: 14 }}>
            <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}40`, paddingBottom: 2 }]}>Skills</Text>
            {data.skills.map((g, i) => (
              <Text key={i} style={{ color: "#6b7280", marginBottom: 2 }}>
                <Text style={{ fontWeight: 600, color: "#374151" }}>{g.category}: </Text>
                {g.items.join(", ")}
              </Text>
            ))}
          </View>
        )}

        {data.certifications.length > 0 && (
          <View style={{ marginTop: 14 }}>
            <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}40`, paddingBottom: 2 }]}>Certifications</Text>
            {data.certifications.map((c, i) => (
              <Text key={i} style={{ color: "#6b7280" }}><Text style={{ fontWeight: 600 }}>{c.name}</Text> — {c.issuer} ({c.date})</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

function GenericPDF({ data, color, title }: { data: ResumeData; color: string; title: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 40 }]}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 24, fontWeight: 700, color: "#111827" }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 11, color, marginTop: 2 }}>{data.basics.headline}</Text>
          <View style={[baseStyles.contactRow, { marginTop: 6 }]}>
            {data.basics.email && <Text>{data.basics.email}</Text>}
            {data.basics.phone && <Text>{data.basics.phone}</Text>}
            {data.basics.location && <Text>{data.basics.location}</Text>}
            {data.basics.linkedin && <Text>{data.basics.linkedin}</Text>}
          </View>
        </View>

        <SectionDivider color={color} />

        {data.basics.summary && (
          <>
            <Text style={{ color: "#6b7280", marginBottom: 8 }}>{data.basics.summary}</Text>
            <SectionDivider color={color} />
          </>
        )}

        {data.experience.length > 0 && (
          <View style={{ marginBottom: 8 }}>
            <Text style={[baseStyles.sectionTitle, { color }]}>Experience</Text>
            {data.experience.map((exp) => (
              <View key={exp.id} style={{ marginBottom: 8 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={baseStyles.h3}>{exp.position}</Text>
                  <Text style={baseStyles.small}>{exp.startDate} — {exp.endDate}</Text>
                </View>
                <Text style={[baseStyles.subtitle, { color }]}>{exp.company}</Text>
                {exp.highlights.map((h, i) => (
                  <View key={i} style={baseStyles.bullet}>
                    <View style={[baseStyles.bulletDot, { backgroundColor: color }]} />
                    <Text style={{ flex: 1, color: "#6b7280" }}>{h}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {data.education.length > 0 && (
          <View style={{ marginBottom: 8 }}>
            <Text style={[baseStyles.sectionTitle, { color }]}>Education</Text>
            {data.education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 4 }}>
                <Text style={baseStyles.h3}>{edu.degree} in {edu.field}</Text>
                <Text style={baseStyles.subtitle}>{edu.institution} | {edu.startDate} — {edu.endDate}</Text>
              </View>
            ))}
          </View>
        )}

        {data.skills.length > 0 && (
          <View style={{ marginBottom: 8 }}>
            <Text style={[baseStyles.sectionTitle, { color }]}>Skills</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
              {data.skills.flatMap((g) => g.items).map((item, i) => (
                <Text key={i} style={{ fontSize: 7.5, color: "#6b7280", backgroundColor: `${color}10`, paddingHorizontal: 4, paddingVertical: 2, borderRadius: 2 }}>{item}</Text>
              ))}
            </View>
          </View>
        )}

        {data.certifications.length > 0 && (
          <View>
            <Text style={[baseStyles.sectionTitle, { color }]}>Certifications</Text>
            {data.certifications.map((c, i) => (
              <Text key={i} style={{ fontSize: 8, color: "#6b7280", marginBottom: 2 }}>{c.name} — {c.issuer}</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

function CompactPDF({ data, color }: { data: ResumeData; color: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 0 }]}>
        {/* Header with right-aligned contact */}
        <View style={{ paddingHorizontal: 30, paddingTop: 24, paddingBottom: 12, borderBottomWidth: 2, borderBottomColor: color }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 700, color: "#111827" }}>{data.basics.name}</Text>
              <Text style={{ fontSize: 10, fontWeight: 600, color, marginTop: 1 }}>{data.basics.headline}</Text>
            </View>
            <View style={{ alignItems: "flex-end", gap: 1 }}>
              {data.basics.email && <Text style={{ fontSize: 7, color: "#6b7280" }}>{data.basics.email}</Text>}
              {data.basics.phone && <Text style={{ fontSize: 7, color: "#6b7280" }}>{data.basics.phone}</Text>}
              {data.basics.location && <Text style={{ fontSize: 7, color: "#6b7280" }}>{data.basics.location}</Text>}
              {data.basics.linkedin && <Text style={{ fontSize: 7, color: "#6b7280" }}>{data.basics.linkedin}</Text>}
            </View>
          </View>
        </View>

        {data.basics.summary && (
          <View style={{ paddingHorizontal: 30, paddingTop: 10 }}>
            <Text style={{ fontSize: 8, color: "#6b7280" }}>{data.basics.summary}</Text>
          </View>
        )}

        <View style={{ flexDirection: "row", paddingHorizontal: 30, paddingTop: 10, gap: 20 }}>
          <View style={{ flex: 1 }}>
            {data.experience.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}30`, paddingBottom: 2 }]}>Experience</Text>
                {data.experience.map((exp) => (
                  <View key={exp.id} style={{ marginBottom: 6 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text style={{ fontSize: 9, fontWeight: 700, color: "#111827" }}>{exp.position}</Text>
                      <Text style={{ fontSize: 7, color: "#9ca3af" }}>{exp.startDate} – {exp.endDate}</Text>
                    </View>
                    <Text style={{ fontSize: 8, color: "#6b7280" }}>{exp.company}{exp.location && ` · ${exp.location}`}</Text>
                    {exp.highlights.map((h, i) => (
                      <View key={i} style={baseStyles.bullet}>
                        <View style={[baseStyles.bulletDot, { backgroundColor: color }]} />
                        <Text style={{ flex: 1, fontSize: 8, color: "#6b7280" }}>{h}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            )}
            {data.projects.length > 0 && (
              <View>
                <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}30`, paddingBottom: 2 }]}>Projects</Text>
                {data.projects.map((proj) => (
                  <View key={proj.id} style={{ marginBottom: 4 }}>
                    <Text style={{ fontSize: 9, fontWeight: 700, color: "#111827" }}>{proj.name}</Text>
                    <Text style={{ fontSize: 8, color: "#6b7280" }}>{proj.description}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
          <View style={{ width: 140 }}>
            {data.education.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}30`, paddingBottom: 2 }]}>Education</Text>
                {data.education.map((edu) => (
                  <View key={edu.id} style={{ marginBottom: 4 }}>
                    <Text style={{ fontSize: 8, fontWeight: 700, color: "#111827" }}>{edu.institution}</Text>
                    <Text style={{ fontSize: 7, color: "#6b7280" }}>{edu.degree} in {edu.field}</Text>
                    <Text style={{ fontSize: 6.5, color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</Text>
                  </View>
                ))}
              </View>
            )}
            {data.skills.length > 0 && (
              <View style={{ marginBottom: 10 }}>
                <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}30`, paddingBottom: 2 }]}>Skills</Text>
                {data.skills.map((g, i) => (
                  <View key={i} style={{ marginBottom: 3 }}>
                    <Text style={{ fontSize: 6.5, fontWeight: 600, color: "#6b7280", textTransform: "uppercase" as const, letterSpacing: 0.5 }}>{g.category}</Text>
                    <Text style={{ fontSize: 7, color: "#9ca3af" }}>{g.items.join(", ")}</Text>
                  </View>
                ))}
              </View>
            )}
            {data.certifications.length > 0 && (
              <View>
                <Text style={[baseStyles.sectionTitle, { color, borderBottomWidth: 0.5, borderBottomColor: `${color}30`, paddingBottom: 2 }]}>Certifications</Text>
                {data.certifications.map((c, i) => (
                  <View key={i} style={{ marginBottom: 2 }}>
                    <Text style={{ fontSize: 7, fontWeight: 600, color: "#374151" }}>{c.name}</Text>
                    <Text style={{ fontSize: 6.5, color: "#9ca3af" }}>{c.issuer}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function CreativePDF({ data, color }: { data: ResumeData; color: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 0, flexDirection: "row" as const }]}>
        {/* Sidebar */}
        <View style={{ width: 180, backgroundColor: color, padding: 20, paddingTop: 30 }}>
          <Text style={{ fontSize: 16, fontWeight: 700, color: "white" }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 9, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>{data.basics.headline}</Text>

          <View style={{ marginTop: 16, gap: 3 }}>
            {data.basics.email && <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.75)" }}>{data.basics.email}</Text>}
            {data.basics.phone && <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.75)" }}>{data.basics.phone}</Text>}
            {data.basics.location && <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.75)" }}>{data.basics.location}</Text>}
            {data.basics.linkedin && <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.75)" }}>{data.basics.linkedin}</Text>}
          </View>

          {data.skills.length > 0 && (
            <View style={{ marginTop: 16 }}>
              <Text style={{ fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 6 }}>Skills</Text>
              {data.skills.map((g, i) => (
                <View key={i} style={{ marginBottom: 4 }}>
                  <Text style={{ fontSize: 6.5, fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase" as const }}>{g.category}</Text>
                  <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.85)" }}>{g.items.join(", ")}</Text>
                </View>
              ))}
            </View>
          )}

          {data.education.length > 0 && (
            <View style={{ marginTop: 16 }}>
              <Text style={{ fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 6 }}>Education</Text>
              {data.education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 4 }}>
                  <Text style={{ fontSize: 8, fontWeight: 700, color: "white" }}>{edu.institution}</Text>
                  <Text style={{ fontSize: 7, color: "rgba(255,255,255,0.7)" }}>{edu.degree} in {edu.field}</Text>
                  <Text style={{ fontSize: 6.5, color: "rgba(255,255,255,0.5)" }}>{edu.startDate} – {edu.endDate}</Text>
                </View>
              ))}
            </View>
          )}

          {data.languages.length > 0 && (
            <View style={{ marginTop: 16 }}>
              <Text style={{ fontSize: 7, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase" as const, letterSpacing: 1.5, marginBottom: 6 }}>Languages</Text>
              {data.languages.map((l, i) => (
                <Text key={i} style={{ fontSize: 7, color: "rgba(255,255,255,0.8)" }}>{l.language} — {l.proficiency}</Text>
              ))}
            </View>
          )}
        </View>

        {/* Main */}
        <View style={{ flex: 1, padding: 30 }}>
          {data.basics.summary && (
            <View style={{ marginBottom: 14, paddingBottom: 10, borderBottomWidth: 0.5, borderBottomColor: `${color}20` }}>
              <Text style={{ fontSize: 8.5, color: "#6b7280", lineHeight: 1.6 }}>{data.basics.summary}</Text>
            </View>
          )}

          {data.experience.length > 0 && (
            <View style={{ marginBottom: 12 }}>
              <Text style={[baseStyles.sectionTitle, { color }]}>Experience</Text>
              {data.experience.map((exp) => (
                <View key={exp.id} style={{ marginBottom: 8 }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 9.5, fontWeight: 700, color: "#111827" }}>{exp.position}</Text>
                    <Text style={{ fontSize: 7, color: "#9ca3af" }}>{exp.startDate} – {exp.endDate}</Text>
                  </View>
                  <Text style={{ fontSize: 8, fontWeight: 600, color: "#6b7280" }}>{exp.company}{exp.location && ` · ${exp.location}`}</Text>
                  {exp.highlights.map((h, i) => (
                    <View key={i} style={baseStyles.bullet}>
                      <View style={[baseStyles.bulletDot, { backgroundColor: color }]} />
                      <Text style={{ flex: 1, fontSize: 8, color: "#6b7280" }}>{h}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          )}

          {data.projects.length > 0 && (
            <View>
              <Text style={[baseStyles.sectionTitle, { color }]}>Projects</Text>
              {data.projects.map((proj) => (
                <View key={proj.id} style={{ marginBottom: 6 }}>
                  <Text style={{ fontSize: 9.5, fontWeight: 700, color: "#111827" }}>{proj.name}</Text>
                  <Text style={{ fontSize: 8, color: "#6b7280" }}>{proj.description}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
}

function TimelinePDF({ data, color }: { data: ResumeData; color: string }) {
  return (
    <Document>
      <Page size="LETTER" style={[baseStyles.page, { padding: 36 }]}>
        {/* Centered header */}
        <View style={{ alignItems: "center", marginBottom: 12 }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 10, fontWeight: 600, color, marginTop: 2 }}>{data.basics.headline}</Text>
          <View style={[baseStyles.contactRow, { justifyContent: "center", marginTop: 6 }]}>
            {data.basics.email && <Text>{data.basics.email}</Text>}
            {data.basics.phone && <Text>{data.basics.phone}</Text>}
            {data.basics.location && <Text>{data.basics.location}</Text>}
            {data.basics.linkedin && <Text>{data.basics.linkedin}</Text>}
          </View>
        </View>

        <View style={{ height: 2, backgroundColor: color, borderRadius: 1, marginBottom: 10 }} />

        {data.basics.summary && (
          <View style={{ alignItems: "center", marginBottom: 12 }}>
            <Text style={{ fontSize: 8, color: "#6b7280", textAlign: "center", maxWidth: 400 }}>{data.basics.summary}</Text>
          </View>
        )}

        {/* Experience with timeline dots */}
        {data.experience.length > 0 && (
          <View style={{ marginBottom: 12 }}>
            <Text style={[baseStyles.sectionTitle, { color }]}>Experience</Text>
            {data.experience.map((exp, idx) => (
              <View key={exp.id} style={{ flexDirection: "row", marginBottom: 8 }}>
                <View style={{ width: 12, alignItems: "center", marginRight: 8 }}>
                  <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: idx === 0 ? color : "white", borderWidth: 1.5, borderColor: color }} />
                  {idx < data.experience.length - 1 && (
                    <View style={{ width: 1, flex: 1, backgroundColor: `${color}30`, marginTop: 2 }} />
                  )}
                </View>
                <View style={{ flex: 1 }}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={baseStyles.h3}>{exp.position}</Text>
                    <Text style={{ fontSize: 7, color, backgroundColor: `${color}10`, paddingHorizontal: 4, paddingVertical: 1, borderRadius: 2 }}>{exp.startDate} – {exp.endDate}</Text>
                  </View>
                  <Text style={baseStyles.subtitle}>{exp.company}{exp.location && ` · ${exp.location}`}</Text>
                  {exp.highlights.map((h, i) => (
                    <View key={i} style={baseStyles.bullet}>
                      <View style={[baseStyles.bulletDot, { backgroundColor: color }]} />
                      <Text style={{ flex: 1, color: "#6b7280" }}>{h}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}

        <View style={{ flexDirection: "row", gap: 24 }}>
          {data.education.length > 0 && (
            <View style={{ flex: 1 }}>
              <Text style={[baseStyles.sectionTitle, { color }]}>Education</Text>
              {data.education.map((edu) => (
                <View key={edu.id} style={{ marginBottom: 4 }}>
                  <Text style={baseStyles.h3}>{edu.institution}</Text>
                  <Text style={{ fontSize: 8, color: "#6b7280" }}>{edu.degree} in {edu.field}</Text>
                  <Text style={{ fontSize: 7, color: "#9ca3af" }}>{edu.startDate} – {edu.endDate}</Text>
                </View>
              ))}
            </View>
          )}

          {data.skills.length > 0 && (
            <View style={{ width: 180 }}>
              <Text style={[baseStyles.sectionTitle, { color }]}>Skills</Text>
              {data.skills.map((g, i) => (
                <View key={i} style={{ marginBottom: 3 }}>
                  <Text style={{ fontSize: 7, fontWeight: 600, color: "#6b7280", textTransform: "uppercase" as const }}>{g.category}</Text>
                  <Text style={{ fontSize: 7, color: "#9ca3af" }}>{g.items.join(", ")}</Text>
                </View>
              ))}
            </View>
          )}
        </View>

        {data.certifications.length > 0 && (
          <View style={{ marginTop: 8 }}>
            <Text style={[baseStyles.sectionTitle, { color }]}>Certifications</Text>
            {data.certifications.map((c, i) => (
              <Text key={i} style={{ fontSize: 8, color: "#6b7280", marginBottom: 1 }}>{c.name} — {c.issuer} ({c.date})</Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}

export function createPDFDocument(
  templateId: TemplateId,
  data: ResumeData,
  accentColor: string
) {
  switch (templateId) {
    case "modern":
      return <ModernPDF data={data} color={accentColor} />;
    case "classic":
      return <ClassicPDF data={data} color={accentColor} />;
    case "minimal":
      return <GenericPDF data={data} color={accentColor} title="Minimal" />;
    case "bold":
      return <GenericPDF data={data} color={accentColor} title="Bold" />;
    case "executive":
      return <GenericPDF data={data} color={accentColor} title="Executive" />;
    case "compact":
      return <CompactPDF data={data} color={accentColor} />;
    case "creative":
      return <CreativePDF data={data} color={accentColor} />;
    case "timeline":
      return <TimelinePDF data={data} color={accentColor} />;
    default:
      return <ModernPDF data={data} color={accentColor} />;
  }
}
