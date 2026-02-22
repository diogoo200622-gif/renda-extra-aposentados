import { HeartCrack, ShieldAlert, HandHeart } from "lucide-react"

const pains = [
  {
    icon: HeartCrack,
    title: "A aposentadoria n\u00e3o acompanha o custo de vida",
    description:
      "Cada ano que passa, o dinheiro rende menos. As contas aumentam, mas a renda continua a mesma.",
  },
  {
    icon: ShieldAlert,
    title: "Medo de golpes na internet",
    description:
      "Promessas de dinheiro f\u00e1cil est\u00e3o por toda parte. Como saber em quem confiar?",
  },
  {
    icon: HandHeart,
    title: "Vontade de ajudar a fam\u00edlia sem passar aperto",
    description:
      "Voc\u00ea quer contribuir com seus filhos e netos, mas sem colocar sua estabilidade em risco.",
  },
]

export function PainSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {"Voc\u00ea se identifica com alguma dessas situa\u00e7\u00f5es?"}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pains.map((pain) => (
            <div
              key={pain.title}
              className="rounded-xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <pain.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-card-foreground">
                {pain.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
