import { useMarketPalceStore } from '@/stores/route/superMarket/storePlace.store'
import { useRouter } from 'next/navigation'

export const useDataCarousel = () => {

    const router = useRouter()

    const setNewId = useMarketPalceStore( state => state.setId )
    const setNewAddress = useMarketPalceStore( state => state.name)

    const handleClickStore = (storePlace: object) => {

        console.log(storePlace);
        
        // console.log( 'clicking the ', + {storePlace})
    
        // redirect('http://localhost:3001/')
        router.push('/')
    
      }

  return {
    handleClickStore
  }
}
