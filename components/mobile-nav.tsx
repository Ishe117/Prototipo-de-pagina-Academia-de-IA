"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Brain, Menu } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Inicio",
    },
    {
      href: "/temario",
      label: "Temario",
    },
    {
      href: "/herramientas",
      label: "Herramientas",
    },
    {
      href: "/alumnos",
      label: "Alumnos",
    },
    {
      href: "/soporte",
      label: "Soporte",
    },
    {
      href: "/tienda",
      label: "Tienda",
    },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="px-7">
          <Link href="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
            <Brain className="h-6 w-6" />
            <span className="font-bold">AI Academy</span>
          </Link>
        </div>
        <div className="flex flex-col space-y-3 p-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-2 text-base transition-colors hover:text-foreground/80",
                pathname === route.href ? "text-foreground font-medium" : "text-foreground/60",
              )}
            >
              {route.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="px-3 py-2 text-base transition-colors hover:text-foreground/80"
          >
            Iniciar sesión
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
