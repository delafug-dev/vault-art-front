import Artist from "@/modules/artists/components/ArtistPage/Artist"

interface ArtistPageProps {
    params: {
        slug: string
    }
}

const ArtistPage = ({ params } : ArtistPageProps) => {
    return (
        <Artist params={params}/>
    )
}

export default ArtistPage