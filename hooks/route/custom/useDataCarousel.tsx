import { useMarketPalceStore } from '@/stores/route/superMarket/storePlace.store'
import { dataCarouselProps } from '@/typescript/interface'
import { useRouter } from 'next/navigation'

export const useDataCarousel = () => {

    const router = useRouter()

    const setNewId = useMarketPalceStore( state => state.setId )
    const setNewName = useMarketPalceStore( state => state.setName)
    const setNewDesc = useMarketPalceStore( state => state.setDesc)
    const setNewAddress1 = useMarketPalceStore( state => state.setAddress1)
    const setNewAddress2 = useMarketPalceStore( state => state.setAddress2)
    const setNewAddress3 = useMarketPalceStore( state => state.setAddress3)
    const setNewImg = useMarketPalceStore( state => state.setImg)

    const handleClickStore = (storePlace: dataCarouselProps) => {

        setNewId( storePlace?.id )
        setNewName( storePlace?.name )
        setNewAddress1( storePlace?.addressLine1 )

        router.push('/')
    
      }

  return {
    handleClickStore
  }
}
