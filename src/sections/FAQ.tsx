"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What are credits and how do they work?",
    answer:
      "Credits are the currency you use to generate podcast clips. Each clip you create consumes one credit. Buy a pack once and spend them at your own pace — there's no monthly commitment.",
  },
  {
    question: "Do my credits expire?",
    answer:
      "Never. Credits you purchase are yours to keep and use whenever you're ready. There are no time limits or expiry dates on any pack.",
  },
  {
    question: "Can I download the clips I generate?",
    answer:
      "Yes — all clips are available for download on every pack. Once a clip is generated you can download it in full quality at any time from your dashboard.",
  },
  {
    question: "Which podcast formats and platforms are supported?",
    answer:
      "We support MP3, MP4, WAV, and M4A uploads. Clips can be exported as square, portrait, or landscape video, ready for YouTube Shorts, TikTok, Instagram Reels, and more.",
  },
  {
    question: "Can I buy more credits after I run out?",
    answer:
      "Absolutely. You can top up with any pack at any time. There are no locks or tiers — simply pick the pack that suits your current workload.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "New accounts receive a small number of complimentary credits so you can try the full workflow before committing to a paid pack.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section className="py-20 md:py-24">
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
  );
};
