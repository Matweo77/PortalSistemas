import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function AcordeonAyuda() {
  const Ayudas = [
    {
      id: 1, title: "What is the difference between",
      description: "Acceso al sistema de restaurante.",
    },
    {
      id: 2, title: "What is the difference between a UI and UX Designer?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam eius enim molestiae quis assumenda praesentium quod maiores totam! Quasi.",
    },
    {
      id: 3, title: "How to become a UI designer?",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam eius enim molestiae quis assumenda praesentium quod maiores totam! Quasi.",
    },
    {
      id: 4, title: "What is the best UI design tool?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam eius enim molestiae quis assumenda praesentium quod maiores totam! Quasi.",
    },
    {
      id: 5, title: "Should designers code?",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ullam eius enim molestiae quis assumenda praesentium quod maiores totam! Quasi.",
    },
  ]

  return (
    <div
      className="w-full max-w-[130vh] mx-4 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">PREGUNTAS FRECUENTES</h2>
      <Accordion type="single" collapsible className="w-full space-y-2 mt-[12vh]">
        {Ayudas.map((ayuda) => (
          <AccordionItem key={ayuda.id} value={`item-${ayuda.id}`} className="bg-white rounded-lg">
            <AccordionTrigger className="px-4 py-3 hover:no-underline">{ayuda.title}</AccordionTrigger>
            <AccordionContent className="px-4 pb-3">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-1">
                  <p className="mb-2">{ayuda.description}</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

