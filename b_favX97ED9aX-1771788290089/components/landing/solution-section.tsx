import { CheckCircle2 } from "lucide-react"

const bullets = [
  "Ideias de renda extra de baixo risco",
  "Passo a passo simples e claro",
  "Op\u00e7\u00f5es online e offline",
  "Pensado especialmente para aposentados",
]

export function SolutionSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1">
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              {"A Solu\u00e7\u00e3o"}
            </span>
            <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
              {"Um guia feito para quem busca seguran\u00e7a e simplicidade"}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"O eBook "}
              <strong className="text-foreground">{"Rendas Extras para Aposentados"}</strong>
              {" re\u00fane ideias pr\u00e1ticas e testadas para voc\u00ea complementar sua renda sem correr riscos."}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-6 flex-shrink-0 text-primary" />
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-md">
              <div className="flex flex-col items-center text-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
                  <svg className="size-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mt-4 font-serif text-xl font-bold text-card-foreground">
                  {"Rendas Extras para Aposentados"}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"Pequenos lucros como uma contrapartida \u2014 dicas pr\u00e1ticas para aumentar sua renda e aproveitar a aposentadoria com seguran\u00e7a."}
                </p>
                <span className="mt-4 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  {"eBook Digital em PDF"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
