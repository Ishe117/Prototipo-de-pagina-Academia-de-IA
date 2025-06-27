import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Code, Database, FileCode, FileText, Layers } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HerramientasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Herramientas de IA</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las herramientas y tecnologías que utilizarás durante tu formación en nuestra academia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Tecnologías de vanguardia
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Aprende con las mejores herramientas del mercado
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  En AI Academy te proporcionamos acceso a las herramientas más avanzadas en el campo de la inteligencia
                  artificial, para que puedas desarrollar proyectos de nivel profesional desde el primer día.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/temario">
                      Ver cursos relacionados
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Herramientas de IA"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Nuestras herramientas</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estas son algunas de las tecnologías y frameworks que aprenderás a utilizar en nuestros cursos.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "TensorFlow",
                  description: "Biblioteca de código abierto para aprendizaje automático y redes neuronales.",
                  icon: <Layers className="h-10 w-10 text-primary" />,
                  category: "Frameworks de ML",
                },
                {
                  title: "PyTorch",
                  description: "Framework de aprendizaje profundo con una interfaz Python intuitiva.",
                  icon: <Code className="h-10 w-10 text-primary" />,
                  category: "Frameworks de ML",
                },
                {
                  title: "Scikit-learn",
                  description: "Herramientas simples y eficientes para análisis predictivo de datos.",
                  icon: <FileCode className="h-10 w-10 text-primary" />,
                  category: "Bibliotecas de ML",
                },
                {
                  title: "Hugging Face",
                  description: "Plataforma para modelos de procesamiento de lenguaje natural preentrenados.",
                  icon: <Bot className="h-10 w-10 text-primary" />,
                  category: "NLP",
                },
                {
                  title: "OpenCV",
                  description: "Biblioteca de visión por computadora y aprendizaje automático.",
                  icon: <FileText className="h-10 w-10 text-primary" />,
                  category: "Visión por Computadora",
                },
                {
                  title: "PostgreSQL",
                  description: "Sistema de gestión de bases de datos relacional orientado a objetos.",
                  icon: <Database className="h-10 w-10 text-primary" />,
                  category: "Bases de Datos",
                },
              ].map((tool, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">{tool.icon}</div>
                    <CardTitle>{tool.title}</CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Categoría:</span>
                        <span className="text-sm">{tool.category}</span>
                      </div>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Incluido en nuestros cursos</li>
                        <li>Soporte técnico disponible</li>
                        <li>Proyectos prácticos</li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Link href={`/herramientas/${tool.title.toLowerCase()}`} className="w-full">
                        Más información
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entorno de aprendizaje</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Proporcionamos un entorno de desarrollo completo para que puedas concentrarte en aprender.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mx-0 order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Entorno de aprendizaje"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-4 order-1 lg:order-2">
                <h3 className="text-2xl font-bold">Plataforma educativa integral</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Notebooks en la nube</h4>
                      <p className="text-sm text-muted-foreground">
                        Accede a Jupyter Notebooks desde cualquier dispositivo sin necesidad de instalación.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">GPUs para entrenamiento</h4>
                      <p className="text-sm text-muted-foreground">
                        Acceso a GPUs en la nube para entrenar modelos complejos de manera eficiente.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Datasets curados</h4>
                      <p className="text-sm text-muted-foreground">
                        Acceso a datasets de alta calidad para practicar con datos reales.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Listo para comenzar?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a nuestra academia y obtén acceso inmediato a todas estas herramientas y más.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/login">
                    Inscríbete ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/soporte/contacto">Solicitar demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Bot className="h-6 w-6" />
                <span className="font-bold">AI Academy</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Transformando el mundo a través de la educación en inteligencia artificial.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Enlaces rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/temario" className="text-muted-foreground hover:text-foreground">
                    Temario
                  </Link>
                </li>
                <li>
                  <Link href="/herramientas" className="text-muted-foreground hover:text-foreground">
                    Herramientas
                  </Link>
                </li>
                <li>
                  <Link href="/alumnos" className="text-muted-foreground hover:text-foreground">
                    Alumnos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Soporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/soporte" className="text-muted-foreground hover:text-foreground">
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link href="/soporte/faq" className="text-muted-foreground hover:text-foreground">
                    Preguntas frecuentes
                  </Link>
                </li>
                <li>
                  <Link href="/soporte/contacto" className="text-muted-foreground hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/legal/privacidad" className="text-muted-foreground hover:text-foreground">
                    Política de privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/legal/terminos" className="text-muted-foreground hover:text-foreground">
                    Términos y condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} AI Academy. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
