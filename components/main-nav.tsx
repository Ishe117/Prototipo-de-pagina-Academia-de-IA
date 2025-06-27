"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Brain } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Brain className="h-6 w-6 text-primary" />
        <span className="hidden font-bold sm:inline-block bg-tech-gradient bg-clip-text text-transparent">
          Academia de IA
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Inicio
        </Link>
        <Link
          href="/temario"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/temario" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Temario
        </Link>
        <Link
          href="/herramientas"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/herramientas" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Herramientas
        </Link>
        <Link
          href="/alumnos"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/alumnos" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Alumnos
        </Link>
        <Link
          href="/soporte"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/soporte" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Soporte
        </Link>
        <Link
          href="/tienda"
          className={cn(
            "transition-colors hover:text-primary",
            pathname === "/tienda" ? "text-primary font-medium" : "text-secondary-foreground",
          )}
        >
          Tienda
        </Link>
      </nav>
    </div>
  )
}
