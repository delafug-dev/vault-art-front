'use client'
import Link from "next/link"

const Footer = () => {

    return (
        <footer className="border-t bg-card py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 px-4 md:h-16 md:flex-row md:px-6">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} VaultArt. All rights reserved.
                </p>
                <nav className="flex gap-4 sm:gap-6">
                    <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                        Privacy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                        Terms
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </div>
        </footer>
    )

}

export default Footer
