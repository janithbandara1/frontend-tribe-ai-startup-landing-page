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

export const Pricing = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Simple, flexible pricing.
        </h2>
        <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
          Buy credits once and use them whenever you need — no subscriptions,
          no surprises.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 mt-12 items-center lg:items-stretch justify-center">
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
                  <svg className="w-4 h-4 text-[#A369FF] shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8.5l3.5 3.5 7-7" /></svg>
                  <span className="text-sm">{plan.credits}</span>
                </div>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-[#A369FF] shrink-0" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.5 8.5l3.5 3.5 7-7" /></svg>
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
      </div>
    </section>
  );
};
