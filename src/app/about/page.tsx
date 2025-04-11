"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AboutPage() {

    return (
        <div className="flex items-center min-h-screen flex-col bg-[hsl(var(--gallery-bg))]">
                <section className="container px-4 py-10 md:px-6 md:py-16">
                    <div className="mx-auto max-w-[800px]">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">About VaultArt</h1>
                            <p className="mt-4 text-xl text-muted-foreground">Where art history meets modern technology</p>
                        </div>

                        <div className="grid gap-12">
                            {/* Mission Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p>
                                        VaultArt was created with a simple yet powerful mission: to make art accessible to everyone. We
                                        provide a curated collection of artwork that is free from copyright restrictions, allowing users to
                                        not only explore and appreciate these masterpieces but also download and use them freely.
                                    </p>
                                    <p>
                                        We believe that art should be experienced by all, regardless of geographical or financial
                                        limitations. By creating a digital space where these works can be easily accessed, we hope to
                                        inspire a new generation of art lovers and creators.
                                    </p>
                                </div>
                            </div>

                            {/* Creator's Story Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Creator s Story</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p>
                                        VaultArt is the culmination of my personal journey through two seemingly different worlds: art
                                        history and programming. After studying art history and developing a deep appreciation for the
                                        masters and their techniques, I found myself drawn to the world of technology and programming.
                                    </p>
                                    <p>
                                        Rather than seeing these as separate paths, I envisioned a way to unite them. VaultArt represents
                                        the intersection of these passions—a digital gallery built with modern web technologies that honors
                                        and preserves the artistic heritage that has shaped our cultural landscape.
                                    </p>
                                    <p>
                                        For me, art is the ultimate connection to life itself. It provokes emotions, challenges
                                        perspectives, and makes us feel truly alive. Through this project, I aim to share that connection
                                        with others while honing my programming skills.
                                    </p>
                                </div>
                            </div>

                            {/* Our Collection Section */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Our Collection</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p>
                                        The artwork featured on VaultArt is sourced from renowned institutions that have made their
                                        collections available through public APIs:
                                    </p>
                                    <ul>
                                        <li>
                                            <strong>The Art Institute of Chicago</strong> — Home to one of the largest and most significant
                                            collections of art in the world, spanning thousands of years of human creativity.
                                        </li>
                                        <li>
                                            <strong>Rijksmuseum</strong> — The Dutch national museum dedicated to arts and history, featuring
                                            masterpieces from the Dutch Golden Age including works by Rembrandt and Vermeer.
                                        </li>
                                    </ul>
                                    <p>
                                        We focus on works that are in the public domain, ensuring that users can freely download and use
                                        these images for personal, educational, or creative purposes.
                                    </p>
                                </div>
                            </div>

                            {/* Technical Details */}
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Technical Details</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    <p>VaultArt is built using modern web technologies, including:</p>
                                    <ul>
                                        <li>Next.js for server-side rendering and optimal performance</li>
                                        <li>React for building a responsive and interactive user interface</li>
                                        <li>Tailwind CSS for elegant, minimalist styling</li>
                                        <li>Public APIs from major art institutions for accessing artwork data</li>
                                    </ul>
                                    <p>
                                        This project is a labor of love and a continuous work in progress. As I grow as a developer, so too
                                        will VaultArt evolve and improve.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* API Attribution Section */}
                        <div className="mt-16 p-6 border rounded-lg bg-card">
                            <h2 className="text-xl font-bold mb-4">Data Sources</h2>
                            <div className="grid gap-4 md:grid-cols-2">
                                <a
                                    href="https://www.artic.edu/open-access/public-api"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-4 rounded-md border hover:bg-accent transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-medium">Art Institute of Chicago API</h3>
                                        <p className="text-sm text-muted-foreground">Explore the Art Institute s collection data</p>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </a>
                                <a
                                    href="https://data.rijksmuseum.nl/object-metadata/api/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 p-4 rounded-md border hover:bg-accent transition-colors"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-medium">Rijksmuseum API</h3>
                                        <p className="text-sm text-muted-foreground">Access the Rijksmuseum s digital collection</p>
                                    </div>
                                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                </a>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="mt-16 text-center">
                            <h2 className="text-2xl font-bold mb-4">Start Exploring</h2>
                            <p className="mb-6 text-muted-foreground">
                                Discover masterpieces from throughout history and around the world
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg">
                                    <Link href="/collections">
                                        Browse Collections
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button variant="outline" asChild size="lg">
                                    <Link href="/artists">Explore Artists</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}
