import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Brain, Code, Database, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

export default function TemarioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Temario de Cursos</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora nuestro catálogo completo de cursos diseñados para convertirte en un líder en inteligencia
                  artificial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="todos">Todos los cursos</TabsTrigger>
                  <TabsTrigger value="principiantes">Principiantes</TabsTrigger>
                  <TabsTrigger value="intermedios">Intermedios</TabsTrigger>
                  <TabsTrigger value="avanzados">Avanzados</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="todos" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Fundamentos de IA",
                      description:
                        "Introducción a los conceptos básicos de la inteligencia artificial y su aplicación.",
                      level: "Principiante",
                      duration: "8 semanas",
                      icon: <Brain className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Machine Learning Básico",
                      description:
                        "Aprende los algoritmos fundamentales del aprendizaje automático y cómo implementarlos.",
                      level: "Principiante",
                      duration: "10 semanas",
                      icon: <Lightbulb className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Deep Learning",
                      description: "Domina las redes neuronales profundas y sus aplicaciones en problemas complejos.",
                      level: "Intermedio",
                      duration: "12 semanas",
                      icon: <Code className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Procesamiento de Lenguaje Natural",
                      description: "Técnicas avanzadas para trabajar con texto y lenguaje humano.",
                      level: "Intermedio",
                      duration: "10 semanas",
                      icon: <BookOpen className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Visión por Computadora",
                      description: "Implementa sistemas que pueden interpretar y analizar imágenes y videos.",
                      level: "Avanzado",
                      duration: "12 semanas",
                      icon: <Database className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "IA para Liderazgo Empresarial",
                      description: "Estrategias para implementar y liderar proyectos de IA en entornos empresariales.",
                      level: "Avanzado",
                      duration: "8 semanas",
                      icon: <Users className="h-10 w-10 text-primary" />,
                    },
                  ].map((course, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-center mb-4">{course.icon}</div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Nivel:</span>
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Duración:</span>
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Proyectos prácticos</li>
                            <li>Tutorías personalizadas</li>
                            <li>Certificación al finalizar</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Link href={`/temario/${course.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                            Ver detalles
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="principiantes" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Fundamentos de IA",
                      description:
                        "Introducción a los conceptos básicos de la inteligencia artificial y su aplicación.",
                      level: "Principiante",
                      duration: "8 semanas",
                      icon: <Brain className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Machine Learning Básico",
                      description:
                        "Aprende los algoritmos fundamentales del aprendizaje automático y cómo implementarlos.",
                      level: "Principiante",
                      duration: "10 semanas",
                      icon: <Lightbulb className="h-10 w-10 text-primary" />,
                    },
                  ].map((course, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-center mb-4">{course.icon}</div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Nivel:</span>
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Duración:</span>
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Proyectos prácticos</li>
                            <li>Tutorías personalizadas</li>
                            <li>Certificación al finalizar</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Link href={`/temario/${course.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                            Ver detalles
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Contenido similar para las otras pestañas */}
              <TabsContent value="intermedios" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Deep Learning",
                      description: "Domina las redes neuronales profundas y sus aplicaciones en problemas complejos.",
                      level: "Intermedio",
                      duration: "12 semanas",
                      icon: <Code className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "Procesamiento de Lenguaje Natural",
                      description: "Técnicas avanzadas para trabajar con texto y lenguaje humano.",
                      level: "Intermedio",
                      duration: "10 semanas",
                      icon: <BookOpen className="h-10 w-10 text-primary" />,
                    },
                  ].map((course, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-center mb-4">{course.icon}</div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Nivel:</span>
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Duración:</span>
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Proyectos prácticos</li>
                            <li>Tutorías personalizadas</li>
                            <li>Certificación al finalizar</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Link href={`/temario/${course.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                            Ver detalles
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="avanzados" className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Visión por Computadora",
                      description: "Implementa sistemas que pueden interpretar y analizar imágenes y videos.",
                      level: "Avanzado",
                      duration: "12 semanas",
                      icon: <Database className="h-10 w-10 text-primary" />,
                    },
                    {
                      title: "IA para Liderazgo Empresarial",
                      description: "Estrategias para implementar y liderar proyectos de IA en entornos empresariales.",
                      level: "Avanzado",
                      duration: "8 semanas",
                      icon: <Users className="h-10 w-10 text-primary" />,
                    },
                  ].map((course, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <div className="flex items-center justify-center mb-4">{course.icon}</div>
                        <CardTitle>{course.title}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Nivel:</span>
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Duración:</span>
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Proyectos prácticos</li>
                            <li>Tutorías personalizadas</li>
                            <li>Certificación al finalizar</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">
                          <Link href={`/temario/${course.title.toLowerCase().replace(/\s+/g, "-")}`} className="w-full">
                            Ver detalles
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿No encuentras lo que buscas?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos para obtener información sobre cursos personalizados adaptados a tus necesidades
                  específicas.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/soporte/contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
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
                <Brain className="h-6 w-6" />
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
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
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
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
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
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">LinkedIn</span>
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
