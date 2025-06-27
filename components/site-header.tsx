import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <MobileNav />
            <ModeToggle />
            <Button
              asChild
              variant="default"
              size="sm"
              className="bg-primary text-background hover:bg-primary/90 shadow-md hover:shadow-primary/25 transition-all duration-300"
            >
              <Link href="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Iniciar sesión
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
