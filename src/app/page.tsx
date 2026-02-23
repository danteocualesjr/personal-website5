import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full bg-[#0A0A0A]">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight text-white">
            resumaker
          </Link>
          <Link href="/create">
            <Button
              size="sm"
              className="rounded-full bg-white text-[13px] font-medium text-black hover:bg-neutral-200"
            >
              Get started
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-[#0A0A0A] pt-14">
        <div className="mx-auto max-w-3xl px-6 pt-24 pb-28 text-center sm:pt-32 sm:pb-36">
          <p className="mb-5 text-sm tracking-wide text-neutral-500">
            LinkedIn PDF &rarr; polished resume
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-normal tracking-tight text-white">
            Your next resume,
            <br />
            built in sixty seconds
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-[17px] leading-relaxed text-neutral-400">
            Drop your LinkedIn PDF in. AI pulls out everything that matters.
            Pick a template, tweak it, download a PDF. That&apos;s it.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link href="/create">
              <Button
                size="lg"
                className="h-11 rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-neutral-200"
              >
                Create your resume
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-neutral-200 bg-white">
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
                body: "Drag it into Resumaker. GPT-4o reads it and structures your experience, skills, and education.",
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
                <span className="text-[13px] font-semibold tabular-nums text-neutral-300">
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
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Features
          </p>
          <h2 className="mt-3 font-serif text-3xl tracking-tight text-neutral-900 sm:text-4xl">
            What you get
          </h2>

          <div className="mt-14 grid gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-3">
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
              <div key={f.title}>
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
          <div className="mt-8">
            <Link href="/create">
              <Button
                size="lg"
                className="h-11 rounded-full bg-white px-7 text-[14px] font-medium text-black hover:bg-neutral-200"
              >
                Get started free
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="text-[13px] font-medium text-neutral-400">resumaker</span>
          <span className="text-[13px] text-neutral-400">
            Your data stays in your browser.
          </span>
        </div>
      </footer>
    </div>
  );
}
