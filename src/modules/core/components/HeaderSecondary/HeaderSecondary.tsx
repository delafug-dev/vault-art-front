'use client'
    import {ArrowLeft, Menu} from "lucide-react";
    import Link from "next/link";
    import {usePathname} from "next/navigation";
    import {ModeToggle} from "@/modules/core/components/ModeToggle/ModeToggle";
    import {Button} from "@/components/ui/button";
    import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

    interface HeaderSecondaryProps {
        backRoute?: string;  // Ruta personalizada para volver
        backText?: string;   // Texto personalizado para el enlace
    }

    const HeaderSecondary = ({backRoute, backText}: HeaderSecondaryProps) => {
        const pathname = usePathname();

        // Determinar automáticamente la ruta y texto si no se proporcionan
        let route = backRoute;
        let text = backText;

        if (!route || !text) {
            // Si estamos en una ruta de artista
            if (pathname.startsWith('/artists/')) {
                route = '/artists';
                text = 'Volver a Artistas';
            }
            // Si estamos en una ruta de pintura
            else if (pathname.startsWith('/painting/')) {
                route = '/collections';
                text = 'Volver a Colecciones';
            }
            // Valores por defecto si no coincide con ninguna condición
            else {
                route = '/';
                text = 'Volver al inicio';
            }
        }

        return (
            <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/95 dark:supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <Link href={route} className="flex items-center gap-2">
                        <ArrowLeft className="h-5 w-5" />
                        <span className="text-sm font-medium">{text}</span>
                    </Link>
                    <div className="ml-auto flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-2 ml-2">
                            <Button variant="ghost" size="sm">
                                <Link href="/login">Sign In</Link>
                            </Button>
                            <Button size="sm">
                                <Link href="/signup">Sign Up</Link>
                            </Button>
                        </div>
                        <ModeToggle />

                        {/* Mobile Navigation usando Sheet */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon" className="md:hidden ml-2">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Vault Art</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-4 py-6 px-6">
                                    <Link href="/collections" className="text-lg font-medium">
                                        Collections
                                    </Link>
                                    <Link href="/artists" className="text-lg font-medium">
                                        Artists
                                    </Link>
                                    <Link href="#" className="text-lg font-medium">
                                        Exhibitions
                                    </Link>
                                    <Link href="#" className="text-lg font-medium">
                                        About
                                    </Link>
                                    <div className="h-px bg-border my-4" />
                                    <div className="flex flex-col gap-2">
                                        <Button variant="outline">
                                            <Link href="/login">Sign In</Link>
                                        </Button>
                                        <Button>
                                            <Link href="/signup">Sign Up</Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>
        )
    }

    export default HeaderSecondary