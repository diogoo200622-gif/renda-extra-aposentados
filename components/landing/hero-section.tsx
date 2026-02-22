import Image from "next/image"
import { ShieldCheck, Ban, AlertTriangle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary pb-16 pt-12 md:pb-24 md:pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-balance font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
              {"Aprenda formas seguras de complementar sua renda na aposentadoria"}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              {"Um guia pr\u00e1tico com ideias reais, simples e sem risco para gerar uma renda extra com tranquilidade."}
            </p>
            <a
              href="https://pay.kiwify.com.br/D5fYVhL"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-foreground"
            >
              {"Quero acessar o guia agora"}
            </a>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <TrustBadge icon={<ShieldCheck className="size-5" />} text="Sem promessas milagrosas" />
              <TrustBadge icon={<Ban className="size-5" />} text="Sem golpes" />
              <TrustBadge icon={<AlertTriangle className="size-5" />} text={"Sem pir\u00e2mides"} />
            </div>
          </div>
          <div className="w-full max-w-sm flex-shrink-0 lg:max-w-md">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/ebook-hero.jpg"
                alt="eBook Rendas Extras para Aposentados exibido em um tablet"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-medium text-primary-foreground">
      {icon}
      {text}
    </span>
  )
}
