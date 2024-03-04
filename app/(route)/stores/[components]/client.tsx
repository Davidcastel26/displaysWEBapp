'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { CardTitle, EmblaCarousel } from "@/components/system"
import '@/css/embla.css'
import '@/css/sandbox.css'
import '@/css/baseEmbla.css'

export const ClientStore = () => {

    const TITLE = `Elige una tienda.`
    const PARRAF = `Debe ser la tienda a la cual quieras hacer el pedido`

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="py-[2rem]">
        <CardTitle title={TITLE} parraf={PARRAF}/>
        <div className="mr-[-1.43rem] ml-[-1.43rem] mt-[2rem]">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    </div>
  )
}