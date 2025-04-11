'use client'
import Image from "next/image";
import Link from "next/link";
import {Palette} from "lucide-react";
import RecoveryPasswordForm from "@/modules/auth/components/RecoveryPassword/RecoveryPasswordForm";

const RecoveryPassword = () => {

    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row">
            {/* Panel izquierdo - Formulario */}
            <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2 md:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-md">
                    <div className="flex items-center gap-2 mb-8">
                        <Palette className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">ArtSpace</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">¿Olvidaste tu contraseña?</h2>
                        <p className="mt-2 text-muted-foreground">
                            No te preocupes, te enviaremos instrucciones para restablecerla.
                        </p>
                    </div>

                    <RecoveryPasswordForm />

                    <div className="mt-8 text-center text-sm">
                        <Link href="/login" className="text-primary hover:underline">
                            Volver al inicio de sesión
                        </Link>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <Link href="/signup" className="text-primary hover:underline">
                            Crear una cuenta
                        </Link>
                    </div>
                </div>
            </div>

            {/* Panel derecho - Imagen */}
            <div className="hidden w-1/2 bg-muted md:block">
                <div className="relative h-full w-full">
                    <Image
                        src="/imgs/van-gogh.jpg"
                        alt="Arte abstracto"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                        <blockquote className="space-y-2">
                            <p className="text-lg font-medium italic">
                                &quot;El arte es la mentira que nos permite comprender la verdad.&quot;
                            </p>
                            <footer className="text-sm">— Pablo Picasso</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default RecoveryPassword
