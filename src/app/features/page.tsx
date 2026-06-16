import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Button } from "@/components/Button";

const features = [
  {
    tag: "Content Intelligence",
    headline: "AI finds your best moments — automatically.",
    description:
      "Gemini 2.5 Pro reads through your entire podcast and scores every segment for virality, hook strength, and audience retention. WhisperX then produces word-level transcriptions aligned to the millisecond, so captions are always perfectly in sync.",
    points: [
      "Gemini 2.5 Pro for deep semantic content analysis",
      "WhisperX for precise word-level transcription",
      "Automatic viral-moment scoring and ranking",
      "Multi-speaker diarization for clean attribution",
    ],
    accent: "from-[#8c45ff]/20 to-transparent",
    number: "01",
  },
  {
    tag: "Speaker Detection & Cropping",
    headline: "Horizontal in. Vertical out. Every time.",
    description:
      "OpenCV tracks the active speaker frame-by-frame and reframes your horizontal recording into a crisp 9:16 vertical crop — with no manual editing required. Rendering runs on serverless GPUs via Modal, so clips are ready in seconds regardless of length.",
    points: [
      "OpenCV real-time speaker detection",
      "Automatic 16:9 → 9:16 reframing",
      "Serverless GPU rendering via Modal",
      "Smooth crop transitions between speakers",
    ],
    accent: "from-[#4a208a]/20 to-transparent",
    number: "02",
  },
  {
    tag: "Processing Pipeline",
    headline: "Background jobs that never drop a clip.",
    description:
      "Every upload fans out into a reliable processing pipeline managed by Inngest — with built-in retries, step-level fan-out, and event-driven orchestration. Finished assets are stored in AWS S3 for durable, low-latency delivery anywhere in the world.",
    points: [
      "Inngest for queue management and retry logic",
      "Step-level fan-out for parallel processing",
      "AWS S3 for durable media storage",
      "Real-time event streaming to your dashboard",
    ],
    accent: "from-[#8c45ff]/20 to-transparent",
    number: "03",
  },
  {
    tag: "Billing & Dashboard",
    headline: "Buy credits once. Use them whenever.",
    description:
      "Stripe powers a flexible credit-based billing model — no subscriptions, no surprises. Your dashboard shows live processing status for every clip in your queue, your remaining credit balance, and one-click downloads the moment a clip is ready.",
    points: [
      "Stripe credit-based billing with no subscriptions",
      "Real-time processing status per clip",
      "Account balance and transaction history",
      "One-click download for finished clips",
    ],
    accent: "from-[#4a208a]/20 to-transparent",
    number: "04",
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#A369FF] shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.5 8.5l3.5 3.5 7-7"
    />
  </svg>
);

export default function FeaturesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Page hero */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgb(140,69,255,.25)_0%,transparent_100%)] pointer-events-none" />
          <div className="container relative text-center">
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 text-sm text-white/60 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A369FF] inline-block" />
              AI Podcast Clipper
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter max-w-3xl mx-auto">
              Everything that makes it work.
            </h1>
            <p className="text-white/60 text-lg md:text-xl mt-6 max-w-xl mx-auto leading-relaxed">
              From raw podcast audio to platform-ready vertical clips — here is
              how each piece of the pipeline fits together.
            </p>
          </div>
        </section>

        {/* Feature sections */}
        <section className="pb-24 md:pb-32">
          <div className="container flex flex-col gap-6">
            {features.map((feature) => (
              <div
                key={feature.number}
                className={`relative rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br ${feature.accent} p-8 md:p-12`}
              >
                <div className="absolute top-6 right-8 text-[120px] font-bold text-white/[0.03] leading-none select-none pointer-events-none">
                  {feature.number}
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start relative">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#A369FF] mb-4">
                      {feature.tag}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tighter leading-tight">
                      {feature.headline}
                    </h2>
                    <p className="text-white/60 mt-5 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 md:pt-10">
                    {feature.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-white/80 text-sm leading-relaxed">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 border-t border-white/10">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">
              Ready to clip your first podcast?
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-md mx-auto">
              Get started with a free credit pack — no subscription required.
            </p>
            <div className="mt-8 flex justify-center">
              <Button>Join waitlist</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
