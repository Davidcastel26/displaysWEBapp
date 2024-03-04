export interface dataCarouselProps {
    id: string
    address: string
    address1: string
    img: string
}

export interface ActionsCarousel {
    setId: ( value: string) => void
    setAddress: ( value: string) => void
    setAddress1 : ( value: string) => void
    setImg : ( value: string) => void
}