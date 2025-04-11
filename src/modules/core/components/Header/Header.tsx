'use client'

import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";
import {Search, Menu} from "lucide-react";
import {ModeToggle} from "@/modules/core/components/ModeToggle/ModeToggle";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import HeaderSecondary from "@/modules/core/components/HeaderSecondary/HeaderSecondary";


const Header = () => {

    // Consts, variables, states
    const pathname = usePathname()
    const isArtistDetailPage = pathname.startsWith('/artists/') && pathname !== '/artists';

    const pathnameWithoutHeader = [
        '/login',
        '/signup',
        '/recovery-password',
    ]


    if(pathnameWithoutHeader.includes(pathname)) return null

    // Mostrar HeaderSecondary en páginas de detalle de artistas
    if (isArtistDetailPage) {
        return <HeaderSecondary />
    }

    return (
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-background/95 dark:supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-xl font-bold">Vault Art</span>
                    </Link>
                </div>
                <nav className="hidden gap-6 md:flex">
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Collections
                    </Link>
                    <Link href="/artists" className="text-sm font-medium hover:underline underline-offset-4">
                        Artists
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        Exhibitions
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <form className="hidden items-center lg:flex">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search artwork..."
                                className="w-64 rounded-full bg-background pl-8 md:w-80"
                            />
                        </div>
                    </form>
                    <Button variant="ghost" size="icon" className="lg:hidden">
                        <Search className="h-5 w-5" />
                        <span className="sr-only">Search</span>
                    </Button>
                    <div className="hidden md:flex items-center gap-2">

                        <Button variant="ghost" size="sm" className="cursor-pointer">
                            <Link href="/login" >
                                Sign In
                            </Link>
                        </Button>
                        <Button size="sm" className="cursor-pointer">
                            <Link href="/signup">
                                    Sign Up
                            </Link>
                        </Button>

                    </div>

                {/* Mobile Navigation Menu */}

                <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>Vault Art</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 py-6 px-6">
                                <Link href="#" className="text-lg font-medium">
                                    Exhibitions
                                </Link>
                                <Link href="#" className="text-lg font-medium">
                                    Collections
                                </Link>
                                <Link href="#" className="text-lg font-medium">
                                    Artists
                                </Link>
                                <Link href="#" className="text-lg font-medium">
                                    About
                                </Link>
                                <div className="h-px bg-border my-4" />
                                <div className="flex flex-col gap-2">
                                    <Button variant="outline">Sign In</Button>
                                    <Button>Sign Up</Button>
                                </div>
                            </div>
                        </SheetContent>
                </Sheet>
                    <ModeToggle />
                </div>
            </div>
        </header>
    )

}

export default Header;
