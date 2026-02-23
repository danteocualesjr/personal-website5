import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const accent = "#E8503A";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-[#0A0A0A]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-white">
            resumake
          </Link>
          <Link href="/create">
            <Button
              size="sm"
              className="rounded-full text-[13px] font-medium text-white hover:opacity-90"
              style={{ backgroundColor: accent }}
            >
              Get started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-24 sm:pt-24 sm:pb-28 lg:grid-cols-2 lg:gap-16 lg:pt-28 lg:pb-32">
          {/* Text */}
          <div>
            <div
              className="mb-6 inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold tracking-wide text-white/90"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              LinkedIn PDF &rarr; Resume
            </div>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.75rem)] leading-[1.05] font-normal tracking-tight text-white">
              Your next resume,
              <br />
              <span style={{ color: accent }}>in sixty seconds</span>
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-neutral-400">
              Drop your LinkedIn PDF in. AI pulls out everything that matters.
              Pick a template, tweak it, download a PDF. That&apos;s it.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link href="/create">
                <Button
                  size="lg"
                  className="h-12 rounded-full px-7 text-[14px] font-semibold text-white hover:opacity-90"
                  style={{ backgroundColor: accent }}
                >
                  Create your resume
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="#how-it-works"
                className="text-[14px] font-medium text-neutral-500 underline underline-offset-4 decoration-neutral-700 hover:text-neutral-300 transition-colors"
              >
                How it works
              </Link>
            </div>
          </div>

          {/* Resume mockup */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 rounded-2xl bg-neutral-800/50" />
            <div className="relative overflow-hidden rounded-lg bg-white shadow-2xl" style={{ fontSize: "10px", lineHeight: "1.5" }}>
              {/* Accent top bar */}
              <div className="h-1" style={{ backgroundColor: accent }} />
              <div className="px-7 pt-6 pb-7">
                {/* Header */}
                <h3 className="text-[18px] font-bold tracking-tight text-neutral-900" style={{ lineHeight: "1.2" }}>
                  Sarah Chen
                </h3>
                <p className="mt-0.5 text-[11px] font-medium" style={{ color: accent }}>
                  Senior Product Designer
                </p>
                <p className="mt-2 text-[9px] text-neutral-400">
                  san francisco, ca &nbsp;&middot;&nbsp; sarah@email.com &nbsp;&middot;&nbsp; linkedin.com/in/sarachen
                </p>

                {/* Summary */}
                <p className="mt-4 text-neutral-500" style={{ fontSize: "8.5px", lineHeight: "1.6" }}>
                  Product designer with 8+ years of experience shipping user-facing products at scale. Led design for features reaching 20M+ users. Strong in systems thinking, prototyping, and cross-functional collaboration.
                </p>

                <div className="mt-5 flex gap-6">
                  {/* Left column */}
                  <div className="flex-1">
                    {/* Experience */}
                    <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                      Experience
                    </p>
                    <div className="mt-2.5 h-px bg-neutral-100" />

                    <div className="mt-2.5">
                      <div className="flex items-baseline justify-between">
                        <p className="text-[9.5px] font-bold text-neutral-900">Senior Product Designer</p>
                        <p className="text-[8px] text-neutral-400">2021 &ndash; Present</p>
                      </div>
                      <p className="text-[8.5px] font-medium text-neutral-500">Stripe &middot; San Francisco</p>
                      <ul className="mt-1.5 space-y-1 text-neutral-600" style={{ fontSize: "8px", lineHeight: "1.55" }}>
                        <li className="flex gap-1.5">
                          <span className="mt-[5px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                          <span>Redesigned the merchant onboarding flow, reducing drop-off by 34% and saving $2.8M annually</span>
                        </li>
                        <li className="flex gap-1.5">
                          <span className="mt-[5px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                          <span>Led a 4-person design team on Stripe&apos;s new Dashboard experience for 3M+ businesses</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-baseline justify-between">
                        <p className="text-[9.5px] font-bold text-neutral-900">Product Designer</p>
                        <p className="text-[8px] text-neutral-400">2018 &ndash; 2021</p>
                      </div>
                      <p className="text-[8.5px] font-medium text-neutral-500">Figma &middot; San Francisco</p>
                      <ul className="mt-1.5 space-y-1 text-neutral-600" style={{ fontSize: "8px", lineHeight: "1.55" }}>
                        <li className="flex gap-1.5">
                          <span className="mt-[5px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                          <span>Designed the auto-layout feature used by 5M+ designers, from concept to launch</span>
                        </li>
                        <li className="flex gap-1.5">
                          <span className="mt-[5px] h-[3px] w-[3px] shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                          <span>Built and maintained the component library and internal design system</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="w-[130px] shrink-0">
                    <p className="text-[9px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                      Education
                    </p>
                    <div className="mt-2.5 h-px bg-neutral-100" />
                    <div className="mt-2.5">
                      <p className="text-[9px] font-bold text-neutral-900">Stanford University</p>
                      <p className="text-[8px] text-neutral-500">MS, HCI &middot; 2018</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-[9px] font-bold text-neutral-900">UC Berkeley</p>
                      <p className="text-[8px] text-neutral-500">BA, Cognitive Sci &middot; 2016</p>
                    </div>

                    <p className="mt-4 text-[9px] font-bold uppercase tracking-widest" style={{ color: accent }}>
                      Skills
                    </p>
                    <div className="mt-2.5 h-px bg-neutral-100" />
                    <div className="mt-2 flex flex-wrap gap-1">
                      {["Figma", "Prototyping", "Design Systems", "User Research", "React", "CSS"].map((s) => (
                        <span key={s} className="rounded bg-neutral-100 px-1.5 py-0.5 text-[7.5px] font-medium text-neutral-600">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            How it works
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            Four steps. Under a minute.
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Export from LinkedIn",
                body: "Go to your profile, hit \"More\", then \"Save to PDF\". Takes five seconds.",
              },
              {
                n: "02",
                title: "Upload the PDF",
                body: "Drag it into Resumake. GPT-4o reads it and structures your experience, skills, and education.",
              },
              {
                n: "03",
                title: "Pick a template",
                body: "Five styles designed for different industries. Modern, Classic, Minimal, Bold, Executive.",
              },
              {
                n: "04",
                title: "Edit and download",
                body: "Change anything you want with a live preview. When you\u2019re happy, export a clean PDF.",
              },
            ].map((step) => (
              <div key={step.n} className="bg-white p-7 sm:p-8">
                <span
                  className="text-[13px] font-bold tabular-nums"
                  style={{ color: accent }}
                >
                  {step.n}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="border-b border-neutral-200 bg-neutral-50/80">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Features
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            What you get
          </h2>

          <div className="mt-14 grid gap-x-16 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "AI parsing",
                body: "GPT-4o reads your LinkedIn PDF like a recruiter and pulls out structured data\u2014titles, dates, bullet points, skills.",
              },
              {
                title: "Five templates",
                body: "Each built for a different audience. Minimal for design, Classic for finance, Bold for startups. All ATS-friendly.",
              },
              {
                title: "Live editor",
                body: "Edit any section. Rewrite bullets, reorder jobs, add projects. See every change in real time on the preview.",
              },
              {
                title: "AI rewriting",
                body: "Highlight a bullet point and let AI strengthen the language. Adds metrics, sharpens verbs, keeps it truthful.",
              },
              {
                title: "Color control",
                body: "Twelve accent colors. Swap with one click to match a company\u2019s brand or your personal preference.",
              },
              {
                title: "PDF export",
                body: "Downloads as a real PDF\u2014not a screenshot. Fonts stay sharp, links stay clickable, ATS can parse it.",
              },
            ].map((f) => (
              <div key={f.title} className="border-l-2 py-6 pl-5" style={{ borderColor: `${accent}30` }}>
                <h3 className="text-[15px] font-semibold text-neutral-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-neutral-500">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
          <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
            Stop overthinking your resume.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-neutral-400">
            Upload, pick a style, edit, export. Done before your coffee gets cold.
          </p>
          <div className="mt-10">
            <Link href="/create">
              <Button
                size="lg"
                className="h-12 rounded-full px-8 text-[14px] font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Get started free
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-[13px] font-medium text-neutral-900">resumake</span>
          <span className="text-[13px] text-neutral-400">
            Your data stays in your browser.
          </span>
        </div>
      </footer>
    </div>
  );
}
