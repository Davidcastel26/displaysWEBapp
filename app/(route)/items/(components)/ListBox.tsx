'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ItemProps } from "@/typescript/interface"



// export const ListBox = ({ items }:Root) => {
// export const ListBox: React.FC<ItemProps> = ({ items:  }) => {
export const ListBox= ({ items, activeIndex }:any) => {

  const activeItem = 'bg-gray-400 text-black'
  
  return (
    <ul className="w-full mt-1.4">
    {
        items.map((item: ItemProps, index: number) => (


          <li key={index} className={`bg-black text-white p-2 ${index === activeIndex ? activeItem : '' }`}>
            
            {/* <Card> */}
                {/* <CardHeader> */}
                  {/* <img src="" alt="no image" /> */}
                {/* </CardHeader> */}
                {/* <div className="flex justify-between m-[1rem]"> */}
                  <div>
                  { item.name }
                  </div>
                  {/* <Button> */}
                    {/* Agregar */}
                  {/* </Button> */}
                {/* </div> */}
                
            {/* </Card> */}
            </li>
        ))
    }
    </ul>
  )
}
