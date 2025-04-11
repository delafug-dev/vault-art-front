'use client'
import Image from "next/image";
import {Palette} from "lucide-react";
import Link from "next/link";
import {LoginForm} from "@/modules/auth/components/Login/LoginForm";

const Login = () => {

    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row">
            {/* Panel izquierdo - Formulario */}
            <div className="flex w-full flex-col items-center justify-center px-4 py-12 md:w-1/2 md:px-8 lg:px-12">
                <div className="mx-auto w-full max-w-md p-5 md:p-0 ">
                    <div className="flex items-center gap-2 mb-8">
                        <Palette className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold">VaultArt</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold tracking-tight">Bienvenido de nuevo</h2>
                        <p className="mt-2 text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta</p>
                    </div>

                    <LoginForm />

                    <p className="mt-8 text-center text-sm text-muted-foreground">
                        ¿No tienes una cuenta?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-primary underline underline-offset-4 hover:text-primary/90"
                        >
                            Regístrate
                        </Link>
                    </p>
                </div>
            </div>

            {/* Panel derecho - Imagen */}
            <div className="hidden w-1/2 bg-muted md:block">
                <div className="relative h-full w-full">
                    <Image
                        src="/imgs/vermeer-milkmaid.jpg"
                        alt="The milkmaid by Johannes Vermeer"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                        <blockquote className="space-y-2">
                            <p className="text-lg font-medium italic">
                                &quot;El arte no reproduce lo visible, sino que hace visible lo que no siempre lo es.&quot;
                            </p>
                            <footer className="text-sm">— Paul Klee</footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login
