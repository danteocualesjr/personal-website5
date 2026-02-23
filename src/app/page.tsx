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
            <div className="relative rounded-lg bg-white p-8 shadow-2xl">
              {/* Accent bar */}
              <div className="mb-6 h-1 w-16 rounded-full" style={{ backgroundColor: accent }} />
              {/* Name */}
              <div className="h-5 w-44 rounded bg-neutral-900" />
              <div className="mt-2 h-3 w-28 rounded" style={{ backgroundColor: `${accent}30` }} />
              {/* Contact row */}
              <div className="mt-4 flex gap-4">
                <div className="h-2 w-24 rounded bg-neutral-200" />
                <div className="h-2 w-20 rounded bg-neutral-200" />
                <div className="h-2 w-16 rounded bg-neutral-200" />
              </div>
              {/* Summary */}
              <div className="mt-6 space-y-2">
                <div className="h-2 w-full rounded bg-neutral-100" />
                <div className="h-2 w-5/6 rounded bg-neutral-100" />
                <div className="h-2 w-4/6 rounded bg-neutral-100" />
              </div>
              {/* Section */}
              <div className="mt-7 flex gap-8">
                <div className="flex-1">
                  <div className="mb-3 h-2.5 w-20 rounded" style={{ backgroundColor: `${accent}25` }} />
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i}>
                        <div className="h-3 w-36 rounded bg-neutral-800" />
                        <div className="mt-1.5 h-2 w-24 rounded bg-neutral-300" />
                        <div className="mt-2.5 space-y-1.5">
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                            <div className="h-2 w-full rounded bg-neutral-100" />
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="mt-1 h-1 w-1 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                            <div className="h-2 w-5/6 rounded bg-neutral-100" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-28 shrink-0 space-y-5">
                  <div>
                    <div className="mb-2 h-2 w-14 rounded" style={{ backgroundColor: `${accent}25` }} />
                    <div className="space-y-1.5">
                      <div className="h-2 w-full rounded bg-neutral-100" />
                      <div className="h-2 w-4/5 rounded bg-neutral-100" />
                    </div>
                  </div>
                  <div>
                    <div className="mb-2 h-2 w-10 rounded" style={{ backgroundColor: `${accent}25` }} />
                    <div className="flex flex-wrap gap-1">
                      {[20, 14, 22, 16, 18].map((w, i) => (
                        <div key={i} className="h-3 rounded bg-neutral-50 ring-1 ring-neutral-100" style={{ width: w * 3 }} />
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
