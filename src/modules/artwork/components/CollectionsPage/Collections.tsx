"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Search, Menu, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

interface Painting {
  id: number;
  title: string;
  artist: string;
  year: number;
  medium: string;
  style: string;
  period: string;
  image: string;
}

interface FilterState {
  styles: string[];
  periods: string[];
}

const Collections = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeFilters, setActiveFilters] = useState<FilterState>({
        styles: [],
        periods: [],
    })

    const handleStyleFilter = (style: string) => {
        setActiveFilters((prev) => {
            const newStyles = prev.styles.includes(style)
                ? prev.styles.filter((s) => s !== style)
                : [...prev.styles, style]
            return {
                ...prev,
                styles: newStyles,
            }
        })
    }

    const handlePeriodFilter = (period: string) => {
        setActiveFilters((prev) => {
            const newPeriods = prev.periods.includes(period)
                ? prev.periods.filter((p) => p !== period)
                : [...prev.periods, period]

            return {
                ...prev,
                periods: newPeriods,
            }
        })
    }

    // Filter paintings based on active filters
    const filteredPaintings = allPaintings.filter((painting) => {
        // If no filters are active, show all paintings
        if (activeFilters.styles.length === 0 && activeFilters.periods.length === 0) {
            return true
        }

        // Check if painting matches any of the active style filters
        const matchesStyle = activeFilters.styles.length === 0 || activeFilters.styles.includes(painting.style)

        // Check if painting matches any of the active period filters
        const matchesPeriod = activeFilters.periods.length === 0 || activeFilters.periods.includes(painting.period)

        return matchesStyle && matchesPeriod
    })

    return (
        <div className="flex items-center min-h-screen flex-col bg-background">
                <section className="container px-4 py-10 md:px-6 md:py-16">
                    <div className="mx-auto max-w-[800px] text-center">
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Colección Completa</h1>
                        <p className="mt-4 text-xl text-muted-foreground">
                            Explora nuestra colección de obras maestras a través de los siglos
                        </p>
                    </div>
                </section>

                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        {/* Filters sidebar */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium">Filtros</h3>
                                    <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                                        Limpiar todos
                                    </Button>
                                </div>
                                <Separator className="my-4" />
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="mb-2 text-sm font-medium">Estilo Artístico</h4>
                                        <div className="space-y-2">
                                            {styles.map((style) => (
                                                <div key={style} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`style-${style}`}
                                                        checked={activeFilters.styles.includes(style)}
                                                        onCheckedChange={() => handleStyleFilter(style)}
                                                    />
                                                    <Label htmlFor={`style-${style}`} className="text-sm">
                                                        {style}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-sm font-medium">Período</h4>
                                        <div className="space-y-2">
                                            {periods.map((period) => (
                                                <div key={period} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        id={`period-${period}`}
                                                        checked={activeFilters.periods.includes(period)}
                                                        onCheckedChange={() => handlePeriodFilter(period)}
                                                    />
                                                    <Label htmlFor={`period-${period}`} className="text-sm">
                                                        {period}
                                                    </Label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery grid */}
                        <div className="md:col-span-3">
                            <div className="mb-6 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground">Mostrando {filteredPaintings.length} obras</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button variant="outline" size="sm" className="hidden md:flex">
                                        <Filter className="mr-2 h-4 w-4" />
                                        Filtrar
                                    </Button>
                                    <select className="rounded-md border border-input bg-background px-3 py-1 text-sm">
                                        <option value="relevance">Relevancia</option>
                                        <option value="date-asc">Fecha (Antigua a Reciente)</option>
                                        <option value="date-desc">Fecha (Reciente a Antigua)</option>
                                        <option value="artist-asc">Artista (A-Z)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredPaintings.map((painting) => (
                                    <PaintingCard key={painting.id} painting={painting} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Collections

function PaintingCard({ painting }: { painting: { id: number; title: string; artist: string; year: number; medium: string; image: string } }) {
    return (
        <div className="group relative flex flex-col">
            {/* Ornate frame effect with shadow and border */}
            <div
                className="relative overflow-hidden rounded-lg border-[12px] border-[#e8d9b0] bg-[#e8d9b0] shadow-md transition-all duration-300 group-hover:shadow-lg"
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
                <p className="text-sm text-muted-foreground">
                    {painting.artist}, {painting.year}
                </p>
                <p className="text-xs text-muted-foreground">{painting.medium}</p>
            </div>

            {/* View details button */}
            <Link href={`/painting/${painting.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">View details for {painting.title}</span>
            </Link>
        </div>
    )
}

// Sample data
const styles = [
    "Impresionismo",
    "Cubismo",
    "Surrealismo",
    "Renacimiento",
    "Barroco",
    "Expresionismo",
    "Postimpresionismo",
]

const periods = ["Siglo XV", "Siglo XVI", "Siglo XVII", "Siglo XVIII", "Siglo XIX", "Siglo XX"]

const allPaintings = [
    {
        id: 1,
        title: "La noche estrellada",
        artist: "Vincent van Gogh",
        year: 1889,
        medium: "Óleo sobre lienzo",
        style: "Postimpresionismo",
        period: "Siglo XIX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 2,
        title: "La Gioconda",
        artist: "Leonardo da Vinci",
        year: 1503,
        medium: "Óleo sobre tabla",
        style: "Renacimiento",
        period: "Siglo XVI",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 3,
        title: "Las Meninas",
        artist: "Diego Velázquez",
        year: 1656,
        medium: "Óleo sobre lienzo",
        style: "Barroco",
        period: "Siglo XVII",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 4,
        title: "El Guernica",
        artist: "Pablo Picasso",
        year: 1937,
        medium: "Óleo sobre lienzo",
        style: "Cubismo",
        period: "Siglo XX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 5,
        title: "El grito",
        artist: "Edvard Munch",
        year: 1893,
        medium: "Óleo, temple y pastel sobre cartón",
        style: "Expresionismo",
        period: "Siglo XIX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 6,
        title: "La persistencia de la memoria",
        artist: "Salvador Dalí",
        year: 1931,
        medium: "Óleo sobre lienzo",
        style: "Surrealismo",
        period: "Siglo XX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 7,
        title: "Impresión, sol naciente",
        artist: "Claude Monet",
        year: 1872,
        medium: "Óleo sobre lienzo",
        style: "Impresionismo",
        period: "Siglo XIX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 8,
        title: "El nacimiento de Venus",
        artist: "Sandro Botticelli",
        year: 1485,
        medium: "Temple sobre lienzo",
        style: "Renacimiento",
        period: "Siglo XV",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 9,
        title: "Los girasoles",
        artist: "Vincent van Gogh",
        year: 1888,
        medium: "Óleo sobre lienzo",
        style: "Postimpresionismo",
        period: "Siglo XIX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 10,
        title: "La joven de la perla",
        artist: "Johannes Vermeer",
        year: 1665,
        medium: "Óleo sobre lienzo",
        style: "Barroco",
        period: "Siglo XVII",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 11,
        title: "Las señoritas de Avignon",
        artist: "Pablo Picasso",
        year: 1907,
        medium: "Óleo sobre lienzo",
        style: "Cubismo",
        period: "Siglo XX",
        image: "/placeholder.svg?height=600&width=600",
    },
    {
        id: 12,
        title: "La última cena",
        artist: "Leonardo da Vinci",
        year: 1498,
        medium: "Temple y óleo sobre yeso",
        style: "Renacimiento",
        period: "Siglo XV",
        image: "/placeholder.svg?height=600&width=600",
    },
]
