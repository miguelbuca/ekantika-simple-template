interface Regions{
    idRegion: number | string
    nameRegion: string,
    state?: boolean
}

interface Route{
    title: string,
    path: string,
    icon?: JSX.Element,
    index?: number
}