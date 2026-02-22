import { BookOpen, Lightbulb, ShieldCheck, ThumbsUp } from "lucide-react"

const items = [
  {
    icon: Lightbulb,
    text: "Como escolher uma renda extra ideal para seu perfil",
  },
  {
    icon: BookOpen,
    text: "Ideias pr\u00e1ticas que cabem na rotina do dia a dia",
  },
  {
    icon: ShieldCheck,
    text: "Como evitar golpes, fraudes e falsas promessas",
  },
  {
    icon: ThumbsUp,
    text: "Como ganhar de forma honesta e tranquila",
  },
]

export function LearnSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {"O que voc\u00ea vai aprender"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          {"Conte\u00fado direto ao ponto, sem enrola\u00e7\u00e3o. Tudo pensado para facilitar sua vida."}
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-5 rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </div>
              <p className="text-lg font-medium leading-relaxed text-card-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
