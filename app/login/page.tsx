import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
          <div className="flex items-center justify-center py-12">
            <Card className="mx-auto w-[350px]">
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl text-center">Iniciar sesión</CardTitle>
                <CardDescription className="text-center">Ingresa a tu cuenta de AI Academy</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" type="email" placeholder="tu@ejemplo.com" required />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link href="/forgot-password" className="ml-auto inline-block text-sm underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Iniciar sesión
                </Button>
                <Button variant="outline" className="w-full bg-white text-black border-gray-300 hover:bg-gray-50">
                  Continuar con Google
                </Button>
              </CardContent>
              <CardFooter>
                <div className="text-center text-sm w-full">
                  ¿No tienes una cuenta?{" "}
                  <Link href="/register" className="underline">
                    Regístrate
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Estudiantes de IA"
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
