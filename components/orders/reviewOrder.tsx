import { CardTitle } from "../system"
import { ChekcoutOrderDisplays } from "./ChekcoutOrderDisplays"
import { ItemsReviewed } from "./itemsReviewed"

export const ReviewOrder = () => {

    const title = `Revisa la orden`
    const prf = `Estas a punto de realizar el pedido 🛒`


  return (
    <div className="mt-[1rem]">
        
            <CardTitle title={title} parraf={prf} />
            <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />

        <ItemsReviewed />
        <ChekcoutOrderDisplays/>
    </div>
  )
}
