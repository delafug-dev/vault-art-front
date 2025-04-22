"use client"

import Link from "next/link"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

interface ArtistProps {
    params: {
        slug: string
    }
}

const Artist = ({params}: ArtistProps) => {

    // In a real app, you would fetch the artist data based on the Name parameter
    const artist = artists.find((a) => a.slug.toString() === params.slug) || artists[0]

    // Get artist's paintings
    const artistPaintings = paintings.filter((painting) => painting.artist === artist.name)

    return (
        <div className="flex items-center flex-col bg-background">
                <div className="container px-4 py-8 md:px-6 md:py-12">
                    <div className="mx-auto max-w-4xl">
                        <div className="grid gap-8 md:grid-cols-[250px_1fr]">
                            <div>
                                <div className="overflow-hidden rounded-lg border bg-card-foreground p-2 shadow-sm">
                                    <Image
                                        src={artist.image || "/placeholder.svg"}
                                        alt={artist.name}
                                        width={250}
                                        height={250}
                                        className="aspect-square h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight">{artist.name}</h1>
                                <p className="text-xl text-muted-foreground">{artist.lifespan}</p>
                                <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm grid-cols-1">
                                    <div>
                                        <span className="font-medium">Nacionalidad:</span> {artist.nationality}
                                    </div>
                                    <div>
                                        <span className="font-medium">Movimiento:</span> {artist.movement}
                                    </div>
                                </div>
                                <Separator className="my-6" />
                                <div>
                                    <h2 className="text-xl font-bold">Biografía</h2>
                                    <p className="mt-2 text-muted-foreground">{artist.bio}</p>
                                    <p className="mt-4 text-muted-foreground">{artist.extendedBio}</p>
                                </div>
                            </div>
                        </div>

                        <Tabs defaultValue="obras" className="mt-12">
                            <TabsList className="grid w-full grid-cols-2 mb-8 bg-primary">
                                <TabsTrigger value="obras" >Obras</TabsTrigger>
                                <TabsTrigger value="cronologia">Cronología</TabsTrigger>
                            </TabsList>
                            <TabsContent value="obras">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {artistPaintings.map((painting) => (
                                        <PaintingCard key={painting.id} painting={painting} />
                                    ))}
                                </div>
                                {artistPaintings.length === 0 && (
                                    <div className="text-center py-12">
                                        <p className="text-muted-foreground">No se encontraron obras para este artista.</p>
                                    </div>
                                )}
                            </TabsContent>
                            <TabsContent value="cronologia">
                                <div className="space-y-8">
                                    {artist.timeline?.map((event, index) => (
                                        <div key={index} className="relative pl-8 pb-8">
                                            <div className="absolute left-0 top-0 h-full w-px bg-border"></div>
                                            <div className="absolute left-[-4px] top-1 h-2 w-2 rounded-full bg-primary"></div>
                                            <div>
                                                <h3 className="font-bold">{event.year}</h3>
                                                <p className="text-muted-foreground">{event.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
        </div>
    )

}

export default Artist


function PaintingCard({ painting }: { painting: { id: number; title: string; year: number; medium: string; image: string } }) {
    return (
        <div className="group relative flex flex-col">
            {/* Ornate frame effect with shadow and border */}
            <div
                className="relative overflow-hidden rounded-lg border-[12px] border-card-foreground bg-card-foreground shadow-md transition-all duration-300 group-hover:shadow-lg"
                style={{ boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.1)" }}
            >
                <div className="aspect-square relative">
                    <Image
                        src={painting.image || "/placeholder.svg"}
                        alt={painting.title}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Museum-style caption */}
            <div className="mt-3 px-2 text-center">
                <h3 className="font-medium">{painting.title}</h3>
                <p className="text-sm text-muted-foreground">{painting.year}</p>
                <p className="text-xs text-muted-foreground">{painting.medium}</p>
            </div>

            {/* View details button */}
            <Link href={`/painting/${painting.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View details for {painting.title}</span>
            </Link>
        </div>
    )
}

// Sample data with added slug field
const artists = [
    {
        id: 1,
        name: "Vincent van Gogh",
        slug: "vincent-van-gogh",
        lifespan: "1853-1890",
        nationality: "Neerlandés",
        movement: "Postimpresionismo",
        bio: "Pintor neerlandés, uno de los principales exponentes del postimpresionismo. Pintó unos 900 cuadros y realizó más de 1600 di bujos.",
        extendedBio:
            "Una figura central en su vida fue su hermano menor Theo, quien le prestó apoyo financiero de manera continua. La calidad de su obra solo fue reconocida después de su muerte, considerándose uno de los grandes maestros de la historia de la pintura. Tuvo una gran influencia en el arte del siglo XX, especialmente entre los expresionistas alemanes y los fauvistas.",
        image: "/placeholder.svg?height=250&width=250",
        timeline: [
            { year: 1853, description: "Nace en Zundert, Países Bajos." },
            { year: 1869, description: "Comienza a trabajar para la firma de marchantes de arte Goupil & Cie." },
            { year: 1880, description: "Decide convertirse en artista." },
            { year: 1886, description: "Se muda a París y conoce a artistas impresionistas." },
            { year: 1888, description: "Se muda a Arlés, donde espera fundar una comunidad de artistas." },
            { year: 1889, description: "Se interna voluntariamente en el asilo de Saint-Rémy." },
            { year: 1890, description: "Fallece en Auvers-sur-Oise, Francia, tras dispararse a sí mismo." },
        ],
    },
    {
        id: 2,
        name: "Leonardo da Vinci",
        slug: "leonardo-da-vinci",
        lifespan: "1452-1519",
        nationality: "Italiano",
        movement: "Renacimiento",
        bio: "Polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo, artista, botánico, científico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista.",
        extendedBio:
            "Frecuentemente descrito como un arquetipo y símbolo del hombre del Renacimiento, genio universal, además de filósofo humanista cuya curiosidad infinita solo puede ser equiparable a su capacidad inventiva, Leonardo da Vinci es considerado uno de los más grandes pintores de todos los tiempos y, probablemente, la persona con el mayor número de talentos en múltiples disciplinas que jamás ha existido.",
        image: "/placeholder.svg?height=250&width=250",
        timeline: [
            { year: 1452, description: "Nace en Vinci, República de Florencia." },
            { year: 1466, description: "Comienza su aprendizaje en el taller de Verrocchio en Florencia." },
            { year: 1482, description: "Se traslada a Milán para trabajar para la familia Sforza." },
            { year: 1503, description: "Comienza a pintar la Mona Lisa." },
            { year: 1513, description: "Se muda a Roma bajo el patrocinio de Giuliano de Médici." },
            { year: 1516, description: "Acepta la invitación del rey Francisco I para trabajar en Francia." },
            { year: 1519, description: "Fallece en Amboise, Francia." },
        ],
    },
    {
        id: 3,
        name: "Pablo Picasso",
        slug: "pablo-picasso",
        lifespan: "1881-1973",
        nationality: "Español",
        movement: "Cubismo",
        bio: "Pintor y escultor español, creador, junto con Georges Braque, del cubismo. Es considerado uno de los mayores artistas del siglo XX.",
        extendedBio:
            "Picasso demostró un talento artístico extraordinario en su primera infancia, pintando de manera realista desde muy joven. Durante su vida, Picasso utilizó muchos estilos y técnicas diferentes. Su trabajo se suele dividir en períodos: el Período Azul, el Período Rosa, el Período Africano, el Cubismo, el Clasicismo y el Surrealismo. Fue también un escultor prolífico y creó obras notables en cerámica y grabado.",
        image: "/placeholder.svg?height=250&width=250",
        timeline: [
            { year: 1881, description: "Nace en Málaga, España." },
            { year: 1895, description: "Se traslada a Barcelona, donde su padre es profesor en la Escuela de Bellas Artes." },
            { year: 1901, description: "Comienza su Período Azul tras el suicidio de su amigo Carlos Casagemas." },
            { year: 1907, description: "Pinta 'Las señoritas de Avignon', obra precursora del cubismo." },
            {
                year: 1937,
                description: "Crea 'Guernica' en respuesta al bombardeo de la ciudad vasca durante la Guerra Civil Española.",
            },
            { year: 1973, description: "Fallece en Mougins, Francia, a los 91 años." },
        ],
    },
]

const paintings = [
    {
        id: 1,
        title: "La noche estrellada",
        artist: "Vincent van Gogh",
        year: 1889,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 2,
        title: "La Gioconda",
        artist: "Leonardo da Vinci",
        year: 1503,
        medium: "Óleo sobre tabla",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 3,
        title: "Las Meninas",
        artist: "Diego Velázquez",
        year: 1656,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 4,
        title: "El Guernica",
        artist: "Pablo Picasso",
        year: 1937,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 5,
        title: "El grito",
        artist: "Edvard Munch",
        year: 1893,
        medium: "Óleo, temple y pastel sobre cartón",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 6,
        title: "La persistencia de la memoria",
        artist: "Salvador Dalí",
        year: 1931,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 7,
        title: "Los girasoles",
        artist: "Vincent van Gogh",
        year: 1888,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 8,
        title: "Autorretrato con oreja vendada",
        artist: "Vincent van Gogh",
        year: 1889,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 9,
        title: "Campo de trigo con cuervos",
        artist: "Vincent van Gogh",
        year: 1890,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 10,
        title: "Las señoritas de Avignon",
        artist: "Pablo Picasso",
        year: 1907,
        medium: "Óleo sobre lienzo",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 11,
        title: "La última cena",
        artist: "Leonardo da Vinci",
        year: 1498,
        medium: "Temple y óleo sobre yeso",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 12,
        title: "El hombre de Vitruvio",
        artist: "Leonardo da Vinci",
        year: 1490,
        medium: "Pluma y tinta sobre papel",
        image: "/placeholder.svg?height=600&width=600",
    },
]