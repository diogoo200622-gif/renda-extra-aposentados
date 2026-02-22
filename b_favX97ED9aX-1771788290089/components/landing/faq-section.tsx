"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O eBook promete dinheiro garantido?",
    answer:
      "N\u00e3o. Nenhum material s\u00e9rio pode garantir ganhos financeiros. O que oferecemos s\u00e3o ideias pr\u00e1ticas e seguras, testadas por pessoas reais. O resultado depende da sua dedica\u00e7\u00e3o.",
  },
  {
    question: "Preciso investir dinheiro para come\u00e7ar?",
    answer:
      "A maioria das ideias do guia pode ser colocada em pr\u00e1tica sem nenhum investimento inicial, ou com investimento muito baixo. Tudo \u00e9 explicado de forma clara.",
  },
  {
    question: "\u00c9 dif\u00edcil de usar ou entender?",
    answer:
      "N\u00e3o. O eBook foi escrito em linguagem simples, com letras grandes e explica\u00e7\u00f5es passo a passo. Foi pensado para ser acess\u00edvel a todos, independente da experi\u00eancia com tecnologia.",
  },
  {
    question: "Funciona para qualquer aposentado?",
    answer:
      "Sim. O guia traz op\u00e7\u00f5es variadas, tanto online quanto offline, que se adaptam a diferentes perfis, rotinas e habilidades.",
  },
  {
    question: "Como recebo o eBook?",
    answer:
      "Ap\u00f3s o pagamento, voc\u00ea recebe o acesso imediato por e-mail. O eBook \u00e9 um arquivo PDF que pode ser lido no celular, tablet ou computador.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <h2 className="text-center font-serif text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          {"Perguntas frequentes"}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-lg text-muted-foreground">
          {"Tire suas d\u00favidas antes de comprar."}
        </p>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
