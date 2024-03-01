import { CardTitle } from "../system"
import { ItemsReviewed } from "./itemsReviewed"

export const ReviewOrder = () => {

    const title = `Revisa la orden`
    const prf = `Estas a punto de realizar el pedido 🛒`


  return (
    <div className="mt-[1rem] divide-y">
        {/* <div className="divide-y"> */}

        <CardTitle title={title} parraf={prf} />
        {/* </div> */}
        <ItemsReviewed />
    </div>
  )
}
