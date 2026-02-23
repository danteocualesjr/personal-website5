import Link from "next/link";
import {
  FileText,
  Upload,
  Palette,
  Download,
  Sparkles,
  ArrowRight,
  Zap,
  PenLine,
  Star,
  ChevronRight,
  Linkedin,
  MousePointerClick,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Upload,
    title: "Drop Your LinkedIn PDF",
    description:
      "Export your LinkedIn profile, drag it in, and watch the magic happen. Zero manual data entry.",
    gradient: "from-violet-500/20 to-indigo-500/20",
    iconColor: "text-violet-600",
  },
  {
    icon: Sparkles,
    title: "AI Extracts Everything",
    description:
      "GPT-4o reads your profile like a recruiter — pulling out titles, achievements, skills, and more.",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    iconColor: "text-fuchsia-600",
  },
  {
    icon: Palette,
    title: "5 Stunning Templates",
    description:
      "Modern, Classic, Minimal, Bold, Executive — each designed to stand out in a stack of resumes.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-600",
  },
  {
    icon: PenLine,
    title: "Edit With Live Preview",
    description:
      "Tweak every word, reorder sections, and see changes instantly. Your resume, your way.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Wand2,
    title: "AI-Enhanced Writing",
    description:
      "One click to transform weak bullet points into powerful, quantified achievements.",
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
  {
    icon: Download,
    title: "Export Perfect PDFs",
    description:
      "Download ATS-optimized PDFs that look exactly like your preview. Ready for any job board.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-600",
  },
];

const steps = [
  {
    icon: Linkedin,
    title: "Export LinkedIn PDF",
    description: 'Open your LinkedIn profile → "More" → "Save to PDF"',
  },
  {
    icon: MousePointerClick,
    title: "Upload & Parse",
    description: "Drop the PDF into Resumaker. AI structures your data instantly.",
  },
  {
    icon: Palette,
    title: "Choose & Customize",
    description: "Pick from 5 templates, edit content, change colors — make it yours.",
  },
  {
    icon: Download,
    title: "Download & Apply",
    description: "Export a polished PDF and start landing interviews.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="glass fixed top-0 z-50 w-full border-b border-white/20">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/25">
              <FileText className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-gray-900">
              Resumaker
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/create">
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5">
                Get Started Free
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="mesh-gradient absolute inset-0 -z-10" />
        <div className="dot-grid absolute inset-0 -z-10 opacity-40" />

        {/* Floating decorative orbs */}
        <div className="absolute top-20 left-[10%] -z-10 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-[10%] -z-10 h-56 w-56 rounded-full bg-purple-400/20 blur-3xl animate-pulse-soft" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-10 left-[30%] -z-10 h-48 w-48 rounded-full bg-pink-400/15 blur-3xl animate-pulse-soft" style={{ animationDelay: "3s" }} />

        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            {/* Badge */}
            <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
                <Zap className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">AI-Powered Resume Builder</span>
              <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up stagger-1 mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Turn your LinkedIn
              <br />
              <span className="gradient-text">into a killer resume</span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-up stagger-2 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
              Upload your LinkedIn PDF. AI parses it in seconds. Pick from{" "}
              <span className="font-medium text-gray-700">5 gorgeous templates</span>,
              edit everything live, and download a{" "}
              <span className="font-medium text-gray-700">pixel-perfect PDF</span>.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up stagger-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/create">
                <Button
                  size="lg"
                  className="h-13 gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 text-base shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-indigo-500/30"
                >
                  Create Your Resume
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-13 rounded-xl border-gray-200/80 bg-white/50 px-8 text-base backdrop-blur-sm transition-all duration-300 hover:bg-white/80"
                >
                  See How It Works
                </Button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="animate-fade-up stagger-4 mt-12 flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "bg-gradient-to-br from-indigo-400 to-purple-500",
                  "bg-gradient-to-br from-pink-400 to-rose-500",
                  "bg-gradient-to-br from-emerald-400 to-teal-500",
                  "bg-gradient-to-br from-amber-400 to-orange-500",
                ].map((bg, i) => (
                  <div
                    key={i}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white text-[10px] font-bold text-white ${bg}`}
                  >
                    {["AJ", "SK", "MP", "LR"][i]}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                Loved by <span className="font-semibold text-gray-700">2,400+</span> job seekers
              </span>
            </div>
          </div>

          {/* Hero Resume Mockup */}
          <div className="animate-fade-up stagger-5 relative mx-auto mt-16 max-w-3xl">
            <div className="animate-float rounded-2xl border border-white/40 bg-white/70 p-1.5 shadow-2xl shadow-indigo-500/10 backdrop-blur-sm">
              <div className="rounded-xl bg-white p-6 sm:p-8">
                <div className="flex gap-6">
                  {/* Left mock column */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="h-6 w-48 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600" />
                      <div className="mt-2 h-3 w-32 rounded bg-indigo-100" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-full rounded bg-gray-100" />
                      <div className="h-2.5 w-5/6 rounded bg-gray-100" />
                      <div className="h-2.5 w-4/6 rounded bg-gray-100" />
                    </div>
                    <div className="pt-2">
                      <div className="mb-2 h-3 w-24 rounded bg-indigo-100" />
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <div className="h-2.5 w-full rounded bg-gray-50" />
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <div className="h-2.5 w-5/6 rounded bg-gray-50" />
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                          <div className="h-2.5 w-4/6 rounded bg-gray-50" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="mb-2 h-3 w-20 rounded bg-indigo-100" />
                      <div className="space-y-2">
                        <div className="h-2.5 w-full rounded bg-gray-50" />
                        <div className="h-2.5 w-3/4 rounded bg-gray-50" />
                      </div>
                    </div>
                  </div>
                  {/* Right mock column */}
                  <div className="hidden w-36 shrink-0 space-y-4 sm:block">
                    <div>
                      <div className="mb-2 h-3 w-16 rounded bg-indigo-100" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-gray-100" />
                        <div className="h-2 w-5/6 rounded bg-gray-100" />
                        <div className="h-2 w-3/4 rounded bg-gray-100" />
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 h-3 w-12 rounded bg-indigo-100" />
                      <div className="flex flex-wrap gap-1">
                        {[20, 16, 24, 18, 22, 14].map((w, i) => (
                          <div key={i} className="h-4 rounded-full bg-indigo-50 border border-indigo-100" style={{ width: `${w * 4}px` }} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="mb-2 h-3 w-20 rounded bg-indigo-100" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-full rounded bg-gray-100" />
                        <div className="h-2 w-4/5 rounded bg-gray-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent badges */}
            <div className="absolute -top-4 -right-4 animate-float rounded-xl border border-white/60 bg-white/80 px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ animationDelay: "0.5s" }}>
              <span className="text-xs font-semibold text-indigo-600">ATS-Friendly</span>
            </div>
            <div className="absolute -bottom-3 -left-4 animate-float rounded-xl border border-white/60 bg-white/80 px-3 py-1.5 shadow-lg backdrop-blur-sm" style={{ animationDelay: "1s" }}>
              <span className="flex items-center gap-1 text-xs font-semibold text-purple-600">
                <Sparkles className="h-3 w-3" /> AI-Powered
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative border-t border-gray-100 py-28">
        <div className="dot-grid absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Features
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Everything you need,{" "}
              <span className="gradient-text">nothing you don&apos;t</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-500">
              From raw LinkedIn data to a polished resume in under 60 seconds.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group relative rounded-2xl border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-200/50 animate-fade-up stagger-${i + 1}`}
              >
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient}`}>
                  <feature.icon className={`h-5 w-5 ${feature.iconColor}`} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-gray-500">
                  {feature.description}
                </p>
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 gradient-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative overflow-hidden py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/50 via-purple-50/30 to-transparent" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-20 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              How It Works
            </p>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Four steps to your{" "}
              <span className="gradient-text">dream resume</span>
            </h2>
          </div>

          <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line (desktop) */}
            <div className="absolute top-14 left-[12%] right-[12%] hidden h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 lg:block" />

            {steps.map((step, i) => (
              <div key={step.title} className={`relative text-center animate-fade-up stagger-${i + 1}`}>
                <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="absolute top-0 right-0 -mt-1 -mr-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-bold text-indigo-600 shadow ring-1 ring-indigo-100">
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-950" />
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-purple-500 blur-3xl" />
        </div>

        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to stand out?
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-lg text-indigo-200/70">
            Join thousands of professionals who landed interviews with resumes built on Resumaker.
          </p>
          <Link href="/create">
            <Button
              size="lg"
              className="h-13 gap-2 rounded-xl bg-white px-10 text-base font-semibold text-gray-900 shadow-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 hover:shadow-white/20"
            >
              Start Building — It&apos;s Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <FileText className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Resumaker</span>
          </div>
          <p className="text-sm text-gray-400">
            Built with AI. Your data never leaves your browser.
          </p>
        </div>
      </footer>
    </div>
  );
}
