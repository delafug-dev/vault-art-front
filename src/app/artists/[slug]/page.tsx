'use server'
import Artist from "@/modules/artists/components/ArtistPage/Artist"

// Actualiza la definición de tipos para reflejar que params es ahora una Promise
export default async function Page({ params }: {
    params: Promise<{ slug: string }>
}) {
    // Espera a que se resuelva la promesa params
    const resolvedParams = await params;

    // Pasa los parámetros resueltos al componente Artist
    return <Artist params={resolvedParams} />
}
