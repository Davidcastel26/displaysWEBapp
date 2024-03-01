import { Button } from "../ui"
import { nanoid } from 'nanoid'

export const ItemsReviewed = () => {

    const itemsPlaced = [
        {
            id: nanoid(),
            productTitleOrdered :"Papaya",
            img: 'https://latorremx.vtexassets.com/arquivos/ids/165752-1600-auto?v=637685360512630000&width=1600&height=auto&aspect=true',
            amount: 3,
        },
        {
            id: nanoid(),
            productTitleOrdered :"Red de limon",
            img: 'https://latorremx.vtexassets.com/arquivos/ids/164917-1200-auto?v=637685243611170000&width=1200&height=auto&aspect=true',
            amount: 5,
        },
    ]

  return (
    <div className="pb-[2rem] mt-[1rem] pt-[1rem] flex flex-col">
        {
            itemsPlaced.map((e) => (
               <div key={ e.id } className="divide-y divide-y-reverse ">
                <img src={e.img} alt="product" />
                <div>
                    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                        { e.productTitleOrdered }
                    </h3>
                    <div className="flex justify-between">
                    <div className="flex">
                        <h5 className="font-semibold">
                            Cantidad:
                        </h5>
                        <p className="ml-3">
                            { e.amount.toString() }
                        </p>
                    </div>
                        <Button variant="link" >
                            Borrar
                        </Button>
                    </div>
                </div>
               </div> 
            ))
        }
    </div>
  )
}
