import { CardTitle } from "@/components/system"

export const OrdersDisplay = () => {
    const title = `Ver todos los articulos`
    const prf = `Para ver todos los articulos da click en mas y podras ver la lista de items que tiene esta tienda`

  return (
    <div>
        <CardTitle title={title} parraf={prf} />
    </div>
  )
}
