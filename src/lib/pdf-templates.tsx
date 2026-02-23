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
        <View style={{ paddingHorizontal: 36, paddingTop: 30, paddingBottom: 18, borderBottomWidth: 2, borderBottomColor: color }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: "#111827" }}>{data.basics.name}</Text>
          <Text style={{ fontSize: 11, fontWeight: 600, color, marginTop: 2 }}>{data.basics.headline}</Text>
          <View style={[baseStyles.contactRow, { marginTop: 6 }]}>
            {data.basics.email && <Text>{data.basics.email}</Text>}
            {data.basics.phone && <Text>{data.basics.phone}</Text>}
            {data.basics.location && <Text>{data.basics.location}</Text>}
            {data.basics.linkedin && <Text>{data.basics.linkedin}</Text>}
          </View>
        </View>

        <View style={{ flexDirection: "row", paddingHorizontal: 36, paddingTop: 16, gap: 24 }}>
          {/* Main Col */}
          <View style={{ flex: 1 }}>
            {data.basics.summary && <Text style={{ color: "#6b7280", marginBottom: 12 }}>{data.basics.summary}</Text>}

            {data.experience.length > 0 && (
              <View style={{ marginBottom: 12 }}>
                <Text style={[baseStyles.sectionTitle, { color }]}>Experience</Text>
                {data.experience.map((exp) => (
                  <View key={exp.id} style={{ marginBottom: 8 }}>
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
                <Text style={[baseStyles.sectionTitle, { color }]}>Projects</Text>
                {data.projects.map((proj) => (
                  <View key={proj.id} style={{ marginBottom: 6 }}>
                    <Text style={baseStyles.h3}>{proj.name}</Text>
                    <Text style={{ color: "#6b7280" }}>{proj.description}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>

          {/* Sidebar */}
          <View style={{ width: 150 }}>
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
    default:
      return <ModernPDF data={data} color={accentColor} />;
  }
}
