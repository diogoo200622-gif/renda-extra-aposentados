import { Zap, BookOpen, LayoutList, ShieldCheck } from "lucide-react"

const benefits = [
  { icon: Zap, text: "Acesso imediato ap\u00f3s a compra" },
  { icon: BookOpen, text: "Leitura f\u00e1cil com linguagem simples" },
  { icon: LayoutList, text: "Conte\u00fado organizado passo a passo" },
  { icon: ShieldCheck, text: "Sem riscos, sem mensalidades" },
]

export function OfferSection() {
  return (
    <section id="oferta" className="bg-primary py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="rounded-2xl bg-card p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-sm font-bold text-accent-foreground">
              {"Oferta Especial"}
            </span>
            <h2 className="mt-5 font-serif text-2xl font-bold text-card-foreground md:text-3xl lg:text-4xl">
              {"Rendas Extras para Aposentados"}
            </h2>
            <p className="mt-3 text-muted-foreground">
              {"eBook Digital em PDF \u2014 Leia no celular, tablet ou computador"}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="flex items-center gap-4 rounded-xl bg-secondary p-4"
              >
                <div className="flex size-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="size-5" />
                </div>
                <span className="font-medium text-secondary-foreground">
                  {b.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <div className="mb-4">
              <span className="text-sm text-muted-foreground line-through">
                {"De R$ 97,00"}
              </span>
              <p className="text-4xl font-bold text-primary md:text-5xl">
                {"R$ 45,99"}
              </p>
              <span className="text-sm text-muted-foreground">
                {"pagamento \u00fanico"}
              </span>
            </div>
            <a
              href="https://pay.kiwify.com.br/D5fYVhL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-xl bg-accent px-10 py-5 text-xl font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {"Comprar agora com acesso imediato"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
