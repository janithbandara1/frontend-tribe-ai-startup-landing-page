"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Button } from "@/components/Button";

const plans = [
  {
    name: "Small Pack",
    price: "$9.99",
    description: "Perfect for occasional podcast creators",
    credits: "50 credits",
    badge: null,
    savings: null,
    features: ["No expiration", "Download all clips"],
    cta: "Buy 50 credits",
    highlighted: false,
  },
  {
    name: "Medium Pack",
    price: "$24.99",
    description: "Best value for regular podcasters",
    credits: "150 credits",
    badge: "Most Popular",
    savings: "save 17%",
    features: ["No expiration", "Download all clips"],
    cta: "Buy 150 credits",
    highlighted: true,
  },
  {
    name: "Large Pack",
    price: "$69.99",
    description: "Ideal for podcast studios and agencies",
    credits: "500 credits",
    badge: null,
    savings: "save 30%",
    features: ["No expiration", "Download all clips"],
    cta: "Buy 500 credits",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "What is a credit?",
    answer:
      "One credit generates one short-form clip from your podcast — including AI analysis, transcription, speaker detection, and vertical rendering.",
  },
  {
    question: "Do credits expire?",
    answer:
      "Never. Credits you buy are yours to use whenever you need them, with no time limits or subscription lock-in.",
  },
  {
    question: "How long does processing take?",
    answer:
      "Most clips are ready within a few minutes. Our serverless GPU pipeline via Modal scales automatically, so processing time stays fast even under heavy load.",
  },
  {
    question: "Can I buy more credits later?",
    answer:
      "Yes — you can top up your balance at any time by purchasing any credit pack. All credits pool together in your account.",
  },
];

const CheckIcon = () => (
  <svg
    className="w-4 h-4 text-[#A369FF] shrink-0"
    fill="none"
    viewBox="0 0 16 16"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8.5l3.5 3.5 7-7" />
  </svg>
);

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

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
              Simple, flexible pricing
            </div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tighter max-w-3xl mx-auto">
              Buy credits once. Clip forever.
            </h1>
            <p className="text-white/60 text-lg md:text-xl mt-6 max-w-md mx-auto leading-relaxed">
              No subscriptions. No monthly fees. Pay once for a credit pack and
              use it whenever you need.
            </p>
          </div>
        </section>

        {/* Pricing cards */}
        <section className="pb-24 md:pb-32">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-stretch justify-center">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative flex flex-col p-8 rounded-2xl border w-full max-w-sm flex-none ${
                    plan.highlighted
                      ? "border-[#A369FF] bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.4),black)]"
                      : "border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.15),black)]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#8c44ff] text-white">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.savings && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white/70">
                        {plan.savings}
                      </span>
                    )}
                  </div>

                  <div className="mt-5">
                    <span className="text-5xl font-bold tracking-tighter">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-3 text-white/60 text-sm leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-2.5">
                      <CheckIcon />
                      <span className="text-sm">{plan.credits}</span>
                    </div>
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <CheckIcon />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 [&>button]:w-full [&>button]:py-3 [&>button]:text-sm">
                    <Button>{plan.cta}</Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Credit cost callout */}
            <p className="text-center text-white/40 text-sm mt-8">
              1 credit = 1 clip &nbsp;·&nbsp; Credits never expire &nbsp;·&nbsp;
              Powered by Stripe
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-24 border-t border-white/10">
          <div className="container">
            <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
              Frequently asked questions.
            </h2>
            <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
              Everything you need to know about credits, clips, and getting
              started.
            </p>
            <div className="mt-12 max-w-2xl mx-auto flex flex-col divide-y divide-white/10">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-4 text-left group"
                  >
                    <span className="font-medium text-base md:text-lg group-hover:text-white/80 transition-colors">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: openIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-white/70"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <line x1="6" y1="1" x2="6" y2="11" />
                        <line x1="1" y1="6" x2="11" y2="6" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-white/60 text-sm md:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-24 border-t border-white/10">
          <div className="container text-center">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter">
              Ready to start clipping?
            </h2>
            <p className="text-white/60 mt-4 text-lg max-w-md mx-auto">
              Join the waitlist and be first to get access when we launch.
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
