import { CardTitle } from "../system"

export const ReviewOrder = () => {

    const title = `Revisa la orden`
    const prf = `Estas a punto de realizar el pedido 🛒`


  return (
    <div className="mt-[1rem]">
        <CardTitle title={title} parraf={prf} />

    </div>
  )
}
