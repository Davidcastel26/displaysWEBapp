'use client'

import { CardTitle } from "@/components/system"

export const ClientStore = () => {

    const TITLE = `Elige una tienda.`
    const PARRAF = `Debe ser la tienda a la cual quieras hacer el pedido`


  return (
    <div className="py-[2rem]">
        <CardTitle title={TITLE} parraf={PARRAF}/>
        
    </div>
  )
}