"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Artists() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredArtists = artists.filter((artist) => {
        if (!searchQuery) return true
        const query = searchQuery.toLowerCase()
        return (
            artist.name.toLowerCase().includes(query) ||
            artist.nationality.toLowerCase().includes(query) ||
            artist.movement.toLowerCase().includes(query)
        )
    })

    return (
        <div className="flex items-center flex-col">
            <section className="container px-4 py-10 md:px-6 md:py-16">
                <div className="mx-auto max-w-[800px] text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Artistas</h1>
                    <p className="mt-4 text-xl text-muted-foreground">
                        Descubre a los maestros detrás de las obras más importantes de la historia del arte
                    </p>
                </div>
            </section>

            <div className="container px-4 md:px-6">
                <div className="mb-8">
                    <div className="relative lg:hidden">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Buscar artistas..."
                            className="w-full rounded-md bg-background pl-8"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredArtists.map((artist) => (
                        <Link href={`/artists/${artist.slug}`} key={artist.id} className="group">
                            <div className="overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-card-foreground">
                                {/* Contenido del artista sin cambios */}
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={artist.image || "/placeholder.svg"}
                                        alt={artist.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full object-cover h-20 w-20"
                                    />
                                    <div>
                                        <h3 className="text-xl font-bold group-hover:underline dark:text-secondary">{artist.name}</h3>
                                        <p className="text-sm text-muted-foreground dark:text-secondary">{artist.lifespan}</p>
                                        <p className="text-sm text-muted-foreground dark:text-secondary">{artist.nationality}</p>
                                    </div>
                                </div>
                                <p className="mt-4 line-clamp-3 dark:text-muted-foreground">{artist.bio}</p>
                                <p className="mt-2 text-sm font-medium text-muted-foreground dark:text-secondary">Movimiento: {artist.movement}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

const artists = [
    {
        id: 1,
        name: "Vincent van Gogh",
        slug: "vincent-van-gogh",
        lifespan: "1853-1890",
        nationality: "Neerlandés",
        movement: "Postimpresionismo",
        bio: "Pintor neerlandés, uno de los principales exponentes del postimpresionismo. Pintó unos 900 cuadros y realizó más de 1600 dibujos. Una figura central en su vida fue su hermano menor Theo, quien le prestó apoyo financiero de manera continua.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 2,
        name: "Leonardo da Vinci",
        slug: "leonardo-da-vinci",
        lifespan: "1452-1519",
        nationality: "Italiano",
        movement: "Renacimiento",
        bio: "Polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo, artista, botánico, científico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 3,
        name: "Pablo Picasso",
        slug: "pablo-picasso",
        lifespan: "1881-1973",
        nationality: "Español",
        movement: "Cubismo",
        bio: "Pintor y escultor español, creador, junto con Georges Braque, del cubismo. Es considerado uno de los mayores artistas del siglo XX, participó en la génesis de muchos movimientos artísticos.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 4,
        name: "Frida Kahlo",
        slug: "frida-kahlo",
        lifespan: "1907-1954",
        nationality: "Mexicana",
        movement: "Surrealismo",
        bio: "Pintora mexicana. Su obra gira temáticamente en torno a su biografía y a su propio sufrimiento. Fue autora de 150 obras, principalmente autorretratos, en los que proyectó sus dificultades por sobrevivir.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 5,
        name: "Claude Monet",
        slug: "claude-monet",
        lifespan: "1840-1926",
        nationality: "Francés",
        movement: "Impresionismo",
        bio: "Pintor francés, uno de los creadores del impresionismo. El término impresionismo deriva del título de su obra Impresión, sol naciente, que provocó la burla de un crítico, quien acuñó el término despectivamente.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 6,
        name: "Salvador Dalí",
        slug: "salvador-dali",
        lifespan: "1904-1989",
        nationality: "Español",
        movement: "Surrealismo",
        bio: "Pintor, escultor, grabador, escenógrafo y escritor español del siglo XX. Se le considera uno de los máximos representantes del surrealismo. Es conocido por sus impactantes y oníricas imágenes surrealistas.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 7,
        name: "Rembrandt",
        slug: "rembrandt",
        lifespan: "1606-1669",
        nationality: "Neerlandés",
        movement: "Barroco",
        bio: "Pintor y grabador neerlandés. La historia del arte le considera uno de los mayores maestros barrocos de la pintura y el grabado, siendo con seguridad el artista más importante de la historia de los Países Bajos.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 8,
        name: "Diego Velázquez",
        slug: "diego-velazquez",
        lifespan: "1599-1660",
        nationality: "Español",
        movement: "Barroco",
        bio: "Pintor barroco español considerado uno de los máximos exponentes de la pintura española y maestro de la pintura universal. Pasó sus primeros años en Sevilla, donde desarrolló un estilo naturalista de iluminación tenebrista.",
        image: "/placeholder.svg?height=100&width=100",
    },
    {
        id: 9,
        name: "Edvard Munch",
        slug: "edvard-munch",
        lifespan: "1863-1944",
        nationality: "Noruego",
        movement: "Expresionismo",
        bio: "Pintor y grabador noruego de la corriente expresionista. Sus evocativas obras sobre la angustia influyeron profundamente en el expresionismo alemán de comienzos del siglo XX.",
        image: "/placeholder.svg?height=100&width=100",
    },
]
