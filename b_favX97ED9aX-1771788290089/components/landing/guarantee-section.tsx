import { Lock, CreditCard, RefreshCcw } from "lucide-react"

const guarantees = [
  {
    icon: Lock,
    title: "Compra 100% segura",
    description: "Seus dados est\u00e3o protegidos com criptografia.",
  },
  {
    icon: CreditCard,
    title: "Pagamento \u00fanico",
    description: "Sem mensalidades, cobran\u00e7as ocultas ou surpresas.",
  },
  {
    icon: RefreshCcw,
    title: "Produto digital",
    description: "Acesse imediatamente ap\u00f3s o pagamento, sem esperar.",
  },
]

export function GuaranteeSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {"Sua tranquilidade \u00e9 nossa prioridade"}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
          {"Compra segura. Produto digital. Sem mensalidades. Sem letras mi\u00fadas."}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center shadow-sm"
            >
              <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <g.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-card-foreground">
                {g.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {g.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
