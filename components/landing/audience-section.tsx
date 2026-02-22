import { Check, X } from "lucide-react"

const forWhom = [
  "Aposentados que querem complementar a renda",
  "Quem busca seguran\u00e7a e simplicidade",
  "Quem quer aprender no pr\u00f3prio ritmo",
  "Familiares que querem ajudar com ideias pr\u00e1ticas",
]

const notForWhom = [
  "Quem procura dinheiro r\u00e1pido e f\u00e1cil",
  "Quem aceita riscos ou apostas",
  "Quem espera resultados sem nenhum esfor\u00e7o",
]

export function AudienceSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {"Para quem \u00e9 este guia?"}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-2 border-primary/30 bg-card p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary">
              <Check className="size-6" />
              {"Para quem \u00e9"}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {forWhom.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-1 size-5 flex-shrink-0 text-primary" />
                  <span className="text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-destructive/30 bg-card p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-xl font-bold text-destructive">
              <X className="size-6" />
              {"Para quem n\u00e3o \u00e9"}
            </h3>
            <ul className="mt-6 flex flex-col gap-4">
              {notForWhom.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-1 size-5 flex-shrink-0 text-destructive" />
                  <span className="text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
