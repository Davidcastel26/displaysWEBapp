import { Button } from "../ui"

export const ItemsReviewed = () => {

    const amount = 1

  return (
    <div className="pb-[2rem] mt-[1rem] pt-[1rem] divide-y divide-y-reverse flex flex-col">
        <img src={'https://latorremx.vtexassets.com/arquivos/ids/165752-1600-auto?v=637685360512630000&width=1600&height=auto&aspect=true'} alt="product" />
        <div className="flex justify-between ">
            <div className="flex flex-row">
            <h5 className="font-semibold">
                Cantidad:
            </h5>
            <p className="ml-3">
                { amount.toString() }
            </p>
            </div>
            <div className="">
            <Button variant="link" >
                Borrar
            </Button>
            </div>
        </div>
    </div>
  )
}
