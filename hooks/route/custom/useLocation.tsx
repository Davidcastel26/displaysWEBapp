import { useMarketPalceStore } from "@/stores/route/superMarket/storePlace.store"

export const useLocation = () => {

    const titleLocation = `Tu tienda selecionada para el pedido es:`
    const nameLocation = useMarketPalceStore( state => state.name )
    const supermarketAddress = `Haz click para seleccionar una tienda`
    const location = nameLocation.length == 0 || !nameLocation ? supermarketAddress : nameLocation


  return {
    titleLocation,
    location
  }
}
