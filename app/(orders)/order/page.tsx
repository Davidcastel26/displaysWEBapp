
import { HeadTitle,
         OrdersDisplay,
         Location } from "./(components)"

const Order = () => {
  return (
    <div className="container mx-auto">
      <HeadTitle/>
      <Location />
      <OrdersDisplay /> 
    </div>
  )
}

export default Order