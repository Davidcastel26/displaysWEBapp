'use client'
import { EmblaOptionsType } from 'embla-carousel'
import { CardTitle, EmblaCarousel } from "@/components/system"

export const ClientStore = () => {

    const TITLE = `Elige una tienda.`
    const PARRAF = `Debe ser la tienda a la cual quieras hacer el pedido`

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="py-[2rem]">
        <CardTitle title={TITLE} parraf={PARRAF}/>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  )
}