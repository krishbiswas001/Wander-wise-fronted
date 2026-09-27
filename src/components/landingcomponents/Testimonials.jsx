import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "kin",
    role: "Solo Traveler",
    avatar: "SM",
    quote:
      "WanderWise planned my entire Southeast Asia trip in minutes. The recommendations felt personal and every stop was unforgettable.",
    rating: 5,
  },
  {
    id: 2,
    name: "nooger",
    role: "Family Explorer",
    avatar: "DC",
    quote:
      "Traveling with kids used to stress me out. This tool made it easy to find family-friendly spots and keep everyone happy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Digital Nomad",
    avatar: "ER",
    quote:
      "I love how WanderWise balances work-friendly spaces with local experiences. It understands how I actually travel.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Loved by travelers worldwide
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            See how WanderWise is helping people explore more, plan less, and travel better.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <Quote className="h-6 w-6 text-primary/60" aria-hidden="true" />
              <p className="mt-4 flex-1 text-base leading-relaxed text-card-foreground">
                "{item.quote}"
              </p>

              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating
                        ? "fill-primary text-primary"
                        : "text-muted-foreground/40"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
