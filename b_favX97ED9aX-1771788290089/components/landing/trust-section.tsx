import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Dona Maria",
    age: "67 anos",
    location: "S\u00e3o Paulo, SP",
    text: "Finalmente encontrei um material que fala a minha l\u00edngua. Comecei uma atividade nova e j\u00e1 consigo ajudar nas despesas de casa.",
  },
  {
    name: "Seu Jos\u00e9",
    age: "72 anos",
    location: "Belo Horizonte, MG",
    text: "Tinha medo de golpe, mas o guia me mostrou caminhos seguros. Estou mais tranquilo e com uma rendinha extra todo m\u00eas.",
  },
  {
    name: "Dona Aparecida",
    age: "65 anos",
    location: "Curitiba, PR",
    text: "Minha neta que me apresentou o material. Achei muito f\u00e1cil de ler e entender. J\u00e1 coloquei duas ideias em pr\u00e1tica!",
  },
]

export function TrustSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            {"Criado com foco em seguran\u00e7a e dignidade"}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {"Este material foi criado com foco em seguran\u00e7a, clareza e dignidade financeira. Veja o que dizem quem j\u00e1 leu:"}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <Quote className="absolute right-4 top-4 size-8 text-primary/15" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-5 fill-accent text-accent"
                  />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-card-foreground">
                {`\u201C${t.text}\u201D`}
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="font-bold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">
                  {`${t.age} \u2014 ${t.location}`}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Image
            src="/images/couple-trust.jpg"
            alt="Casal de aposentados sorrindo ao usar um tablet juntos"
            width={600}
            height={400}
            className="h-auto w-full max-w-lg rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
