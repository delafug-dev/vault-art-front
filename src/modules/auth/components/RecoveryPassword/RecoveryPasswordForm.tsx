'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const RecoveryPasswordForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState("")

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)
        setError("")

        try {
            // Aquí iría la lógica para enviar el correo de recuperación
            // Por ejemplo, con una API personalizada o un servicio de autenticación

            // Simulamos una espera y éxito
            await new Promise((resolve) => setTimeout(resolve, 1500))

            setIsSubmitted(true)
        } catch (err) {
            setError("Hubo un problema al enviar el correo. Por favor, inténtalo de nuevo. " + err)
        } finally {
            setIsLoading(false)
        }
    }

    if (isSubmitted) {
        return (
            <Alert className="bg-primary/10 border-primary/20">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <AlertDescription>
                    Si existe una cuenta asociada a {email}, recibirás un correo con instrucciones para restablecer tu contraseña.
                </AlertDescription>
            </Alert>
        )
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                />
            </div>
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Enviando..." : "Enviar instrucciones"}
            </Button>
        </form>
    )

}

export default RecoveryPasswordForm
