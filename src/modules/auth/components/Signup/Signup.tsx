'use client'

import Image from "next/image";
import {Palette} from "lucide-react";
import {SignupForm} from "@/modules/auth/components/Signup/SignupForm";
import Link from "next/link";

const Signup = () => {
    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row">
            {/* Panel izquierdo - Formulario */}
            <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2 md:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-md p-5 md:p-0">
                    <div className="flex items-center gap-2 mb-8">
                        <Palette className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">VaultArt</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">Crea tu cuenta</h2>
                        <p className="mt-2 text-muted-foreground">Únete a nuestra comunidad de artistas y amantes del arte</p>
                    </div>

                    <SignupForm />

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        ¿Ya tienes una cuenta?{" "}
                        <Link href="/login" className="font-medium text-primary underline underline-offset-4 hover:text-primary/90">
                            Inicia sesión
                        </Link>
                    </p>
                </div>
            </div>

            {/* Panel derecho - Imagen */}
            <div className="hidden w-1/2 bg-muted md:block">
                <div className="relative h-full w-full">
                    <Image
                        src="/imgs/the-quay-de-paris-in-rouen.jpg"
                        alt="Arte abstracto"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                        <blockquote className="space-y-2">
                            <p className="text-lg font-medium italic">
                                &quot;La creatividad requiere el coraje de dejar ir las certezas.&quot;
                            </p>
                            <footer className="text-sm">— Erich Fromm</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
