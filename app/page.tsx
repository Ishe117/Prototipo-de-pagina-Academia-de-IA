import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Brain, Code, Lightbulb, Target, TrendingUp, Users, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section - El Problema */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-tech-gradient opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-transparent"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/20 px-4 py-2 text-sm text-primary border border-primary/30 animate-tech-pulse">
                  ⚡ El futuro ya está aquí
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl bg-tech-gradient bg-clip-text text-transparent">
                  BIENVENIDO A ACADEMIA DE IA
                </h1>
                <h2 className="text-2xl font-semibold tracking-tight text-accent">
                  NO APRENDAS IA… APRENDE A TRANSFORMAR EL MUNDO CON ELLA
                </h2>
                <p className="text-xl text-secondary-foreground leading-relaxed">
                  ¿Qué diferencia a un técnico de un líder en IA?
                  <span className="text-accent font-medium">
                    {" "}
                    La capacidad de dominar los desarrollos nuevos y a futuro.
                  </span>
                </p>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-background hover:bg-primary/90 font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Link href="/temario">
                      Descubre tu camino
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-tech-gradient text-background hover:opacity-90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 animate-glow"
                  >
                    <Link href="/login">
                      Inscríbete
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-tech-gradient opacity-30 blur-3xl animate-pulse"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="El futuro de la IA"
                  width={600}
                  height={500}
                  className="rounded-lg object-cover relative z-10 border border-primary/20"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* La Historia - El Problema */}
        <section id="historia" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto lg:mx-0">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="El problema actual"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-destructive/20 px-3 py-1 text-sm text-destructive border border-destructive/30">
                  🚨 La realidad actual
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Todos hablan de IA, pero pocos la dominan realmente
                </h2>
                <div className="space-y-4 text-secondary-foreground">
                  <p className="text-lg">Mientras el mundo se transforma a velocidad luz, la mayoría se queda atrás.</p>
                  <p>
                    <span className="text-destructive font-medium">El 90% de profesionales</span> solo sabe usar
                    herramientas básicas.
                  </p>
                  <p>
                    <span className="text-destructive font-medium">El 9%</span> entiende la tecnología pero no puede
                    liderar.
                  </p>
                  <p>
                    <span className="text-accent font-medium">Solo el 1%</span> puede razonar, innovar y transformar
                    industrias completas.
                  </p>
                </div>
                <div className="bg-card-gradient p-6 rounded-lg border border-primary/20">
                  <p className="text-accent font-medium text-lg">"¿Dominarás la IA o la IA te dominará a ti?"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* La Solución */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent border border-accent/30">
                  💡 La solución
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Te convertiremos en ese 1% que lidera el cambio
                </h2>
                <p className="max-w-[900px] text-secondary-foreground text-lg">
                  No te enseñamos solo a usar IA. Te enseñamos a{" "}
                  <span className="text-accent font-medium">pensar como un líder en IA</span>.
                </p>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  icon: <Brain className="h-12 w-12 text-accent" />,
                  title: "Razonamiento Estratégico",
                  description: "Aprende a evaluar nuevas tecnologías y predecir su impacto antes que tu competencia.",
                },
                {
                  icon: <Target className="h-12 w-12 text-accent" />,
                  title: "Implementación Real",
                  description: "Proyectos que resuelven problemas reales, no ejercicios académicos sin sentido.",
                },
                {
                  icon: <TrendingUp className="h-12 w-12 text-accent" />,
                  title: "Visión de Futuro",
                  description: "Desarrolla la capacidad de anticipar tendencias y liderar la transformación.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-primary/20 hover:border-accent/50 transition-all duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cuatrimestres - El Camino */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary border border-primary/30">
                  🎯 Tu ruta de transformación
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  6 cuatrimestres que cambiarán tu carrera
                </h2>
                <p className="max-w-[900px] text-secondary-foreground text-lg">
                  Nuestros especialistas diseñaron un camino estructurado desde los fundamentos hasta crear IA que
                  transforme tu mundo y futuro laboral.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  cuatrimestre: "1er Cuatrimestre",
                  titulo: "Descubriendo la IA",
                  subtitulo: "¿Qué es la IA y cómo puedes comenzar a crearla tú mismo?",
                  temas: [
                    "Fundamentos de IA y sus aplicaciones",
                    "Python: el lenguaje de la IA",
                    "Matemáticas sencillas para IA",
                    "Hardware: CPU, GPU y TPU",
                    "Tu primer mini proyecto con IA",
                  ],
                  color: "from-primary/20 to-primary/5",
                  icon: <Lightbulb className="h-8 w-8 text-primary" />,
                },
                {
                  cuatrimestre: "2do Cuatrimestre",
                  titulo: "Enseñando a las Máquinas",
                  subtitulo: "Tu computadora puede aprender a reconocer patrones. ¡Enséñale cómo!",
                  temas: [
                    "Machine Learning explicado simple",
                    "Preparación y limpieza de datos",
                    "Modelos de predicción y clasificación",
                    "Evaluación de modelos de IA",
                    "Proyecto: detector de spam",
                  ],
                  color: "from-accent/20 to-accent/5",
                  icon: <Code className="h-8 w-8 text-accent" />,
                },
                {
                  cuatrimestre: "3er Cuatrimestre",
                  titulo: "Lenguaje de las Máquinas",
                  subtitulo: "Crea un chatbot y enseña a la IA a entender textos.",
                  temas: [
                    "Redes neuronales y entrenamiento",
                    "TensorFlow y PyTorch",
                    "Procesamiento de lenguaje natural",
                    "Análisis de sentimientos",
                    "Proyecto: tu primer chatbot",
                  ],
                  color: "from-primary/30 to-primary/10",
                  icon: <Zap className="h-8 w-8 text-primary" />,
                },
                {
                  cuatrimestre: "4to Cuatrimestre",
                  titulo: "Ojos para las Máquinas",
                  subtitulo: "Enseña a la IA a ver el mundo y predecir el futuro.",
                  temas: [
                    "Visión por computadora",
                    "Reconocimiento facial y objetos",
                    "Detección en tiempo real",
                    "Predicción de secuencias",
                    "Proyecto: sistema de visión artificial",
                  ],
                  color: "from-accent/30 to-accent/10",
                  icon: <Users className="h-8 w-8 text-accent" />,
                },
                {
                  cuatrimestre: "5to Cuatrimestre",
                  titulo: "IA Creativa",
                  subtitulo: "Dale rienda suelta a tu creatividad: la IA también puede inventar.",
                  temas: [
                    "IA generativa: imágenes y arte",
                    "Redes generativas avanzadas",
                    "Generación de música y voces",
                    "Servicios de IA en la nube",
                    "Proyecto: obra digital con IA",
                  ],
                  color: "from-primary/25 to-primary/8",
                  icon: <Target className="h-8 w-8 text-primary" />,
                },
                {
                  cuatrimestre: "6to Cuatrimestre",
                  titulo: "IA en el Mundo Real",
                  subtitulo: "¿Cómo llevamos una IA al mundo real y qué implicaciones tiene?",
                  temas: [
                    "Despliegue en apps web y móviles",
                    "Ética y responsabilidad en IA",
                    "Regulaciones y leyes",
                    "El futuro: IA cuántica y conciencia",
                    "Proyecto final: IA para el mundo real",
                  ],
                  color: "from-accent/25 to-accent/8",
                  icon: <TrendingUp className="h-8 w-8 text-accent" />,
                },
              ].map((cuatrimestre, index) => (
                <Card
                  key={index}
                  className={`bg-card-gradient border-primary/30 hover:border-accent/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10`}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4 p-3 rounded-full bg-primary/10 w-fit mx-auto">
                      {cuatrimestre.icon}
                    </div>
                    <div className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full w-fit mx-auto">
                      {cuatrimestre.cuatrimestre}
                    </div>
                    <CardTitle className="text-xl mb-2 text-foreground">{cuatrimestre.titulo}</CardTitle>
                    <p className="text-sm text-secondary-foreground italic">"{cuatrimestre.subtitulo}"</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cuatrimestre.temas.map((tema, i) => (
                        <li key={i} className="flex items-start text-sm text-secondary-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0 mt-2"></div>
                          {tema}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 font-semibold">
                <Link href="/temario">
                  Ver programa completo detallado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Ventajas de ser alumno */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent border border-accent/30">
                  🎓 Ventajas de ser alumno
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Beneficios de aprender con nosotros</h2>
                <p className="max-w-[900px] text-secondary-foreground text-lg leading-relaxed">
                  En la <span className="text-accent font-medium">AcademIA de Inteligencia Artificial</span>,
                  acompañamos a nuestros estudiantes desde sus primeros pasos hasta alcanzar un dominio avanzado del
                  mundo de la IA. Nuestro curso de dos años está diseñado para todo público, y abarca desde los
                  conceptos fundamentales hasta las tecnologías más innovadoras, como redes neuronales, visión por
                  computadora o IA generativa.
                </p>
                <p className="max-w-[700px] text-accent font-medium text-xl">
                  Aquí, aprender no es solo una meta, es una experiencia.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: (
                    <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  title: "Clases en Vivo + Acceso 24/7",
                  description:
                    "Aprende a tu ritmo. Contamos con clases en vivo (sabatinas o entre semana) y grabaciones disponibles todo el tiempo para que avances cuando quieras, donde quieras.",
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  ),
                  title: "Aprendizaje Integral (Teoría + Práctica)",
                  description:
                    "No solo ves teoría: aplicas lo que aprendes desde el primer día. Crearás proyectos con IA real que resuelven problemas reales.",
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  ),
                  title: "Recursos Profesionales Incluidos",
                  description:
                    "Te damos acceso a herramientas de desarrollo, plataformas educativas, materiales exclusivos y cuentas académicas para que practiques como un profesional.",
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                  title: "Talleres, Webinars y Contenido Extra",
                  description:
                    "¿Te apasiona aprender más? Tendrás acceso libre a talleres, charlas y cursos y noticias adicionales que te mantendrán al día con lo último en IA.",
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                  title: "Certificación con Valor Profesional",
                  description:
                    "Al concluir cada etapa, recibirás certificados oficiales que avalan tu avance, reconocidos por instituciones y empresas de toda Latinoamérica y España. Además de posibilidad de obtener en promedio cada año escolar hasta 2 certificados de certiprof.",
                },
                {
                  icon: (
                    <svg className="h-12 w-12 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Una Comunidad que Crece Contigo",
                  description:
                    "Forma parte de una red de estudiantes, mentores y expertos en IA. Comparte, colabora y crece dentro de una comunidad activa y solidaria.",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-card-gradient border-primary/30 hover:border-accent/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4 p-3 rounded-full bg-primary/10 w-fit mx-auto">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl mb-2 text-foreground">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary-foreground text-center leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button asChild size="lg" className="bg-primary text-background hover:bg-primary/90 font-semibold">
                <Link href="/login">
                  Únete a nuestra comunidad
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* El Resultado */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-hero-gradient">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent border border-accent/30">
                  🚀 Tu transformación
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  De principiante a experto en IA en 24 meses
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-background font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Dominas la tecnología</h3>
                      <p className="text-secondary-foreground">
                        No solo usas herramientas, entiendes cómo funcionan y cuándo aplicarlas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-background font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Lideras proyectos estratégicos</h3>
                      <p className="text-secondary-foreground">
                        Tomas decisiones que impactan el futuro de tu empresa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-background font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Anticipas el futuro</h3>
                      <p className="text-secondary-foreground">Ves oportunidades donde otros ven problemas.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-20 blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Tu transformación"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  El futuro no espera. <span className="text-accent">¿Y tú?</span>
                </h2>
                <p className="max-w-[600px] text-secondary-foreground text-lg">
                  Cada día que pasa, la brecha se hace más grande.
                  <span className="text-accent font-medium"> Únete al 1% que lidera el cambio.</span>
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-tech-gradient text-background hover:opacity-90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-primary/25 transition-all duration-300 animate-glow"
                >
                  <Link href="/login">
                    Comenzar mi transformación
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 bg-transparent"
                >
                  <Link href="/preguntas-frecuentes">Hablar con un asesor</Link>
                </Button>
              </div>
              <p className="text-sm text-secondary-foreground">
                💡 <span className="text-accent">Garantía de 30 días</span> - Si no ves resultados, te devolvemos tu
                dinero
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-primary/20 bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Brain className="h-6 w-6 text-accent" />
                <span className="font-bold text-accent">Academia de IA</span>
              </Link>
              <p className="text-sm text-secondary-foreground">
                Transformando profesionales en líderes de IA desde 2024.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-accent">Programa</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/temario" className="text-secondary-foreground hover:text-accent transition-colors">
                    Temario completo
                  </Link>
                </li>
                <li>
                  <Link href="/herramientas" className="text-secondary-foreground hover:text-accent transition-colors">
                    Herramientas
                  </Link>
                </li>
                <li>
                  <Link href="/alumnos" className="text-secondary-foreground hover:text-accent transition-colors">
                    Casos de éxito
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-accent">Preguntas Frecuentes</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/preguntas-frecuentes"
                    className="text-secondary-foreground hover:text-accent transition-colors"
                  >
                    Centro de ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preguntas-frecuentes/contacto"
                    className="text-secondary-foreground hover:text-accent transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium text-accent">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/legal/privacidad"
                    className="text-secondary-foreground hover:text-accent transition-colors"
                  >
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal/terminos"
                    className="text-secondary-foreground hover:text-accent transition-colors"
                  >
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-primary/20 pt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-secondary-foreground">
              © {new Date().getFullYear()} Academia de IA. Transformando el futuro, un líder a la vez.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-secondary-foreground hover:text-accent transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-secondary-foreground hover:text-accent transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
