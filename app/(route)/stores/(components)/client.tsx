'use client'
import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { CardTitle, CarouselDApiDemo, EmblaCarousel } from "@/components/system"
import '@/css/embla.css'
import '@/css/sandbox.css'
import '@/css/baseEmbla.css'
import { nanoid } from 'nanoid'

const stores = [
  {
    id: nanoid(),
    name: 'Supermercado La Torre C.C.',
    desc: 'Supermercado La Torre C.C.',
    addressLine1: '2ª. Calle, Carril Auxiliar 18-30, Cdad. de Guatemala',
    addressLine2: '2ª. Calle, Carril Auxiliar 18-30, Cdad. de Guatemala',
    addressLine3: '2ª. Calle, Carril Auxiliar 18-30, Cdad. de Guatemala',
    img: `https://s.france24.com/media/display/f5438ab6-1775-11ed-8700-005056a90321/w:980/p:16x9/Part-GTY-1408952743-1-1-0.jpg`
  },
  {
    id: nanoid(),
    name: 'Supermercado La Torre San Cristóbal',
    desc: 'Supermercado La Torre San Cristóbal',
    addressLine1: 'Diagonal 34 Calle Real Acatán, 17-10 Zona 16',
    addressLine2: 'Diagonal 34 Calle Real Acatán, 17-10 Zona 16',
    addressLine3: 'Diagonal 34 Calle Real Acatán, 17-10 Zona 16',
    img: `https://lh5.googleusercontent.com/p/AF1QipOoBGuVpGCKzSLymt7OKIGgeVe44mY60NqSh-5z=w480-h300-k-n-rw`
  },
  {
    id: nanoid(),
    name: 'Supermercado La Torre Marsical 2',
    desc: 'Supermercado La Torre Marsical 2',
    addressLine1: 'Ciudad de, 10 Avenida 8-16, Cdad. de Guatemala 01014',
    addressLine2: 'Ciudad de, 10 Avenida 8-16, Cdad. de Guatemala 01014',
    addressLine3: 'Ciudad de, 10 Avenida 8-16, Cdad. de Guatemala 01014',
    img: `https://lh5.googleusercontent.com/p/AF1QipOSci6mJpVrrMM4SCWAsO9Usg4iK6czEAHjvhEm=w480-h300-k-n-rw`
  },
]

export const ClientStore = () => {

    const TITLE = `Elige una tienda.`
    const PARRAF = `Debe ser la tienda a la cual quieras hacer el pedido`

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = stores.length
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="py-[2rem]">
        <CardTitle title={TITLE} parraf={PARRAF}/>


        <div className="mr-[-1.43rem] ml-[-1.43rem] mt-[2rem]">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} data={stores} />
        </div>
        
        {/* <div className="mr-[2rem] ml-[2rem] mt-[2rem]">
        < CarouselDApiDemo />
        </div>   */}
    </div>
  )
}