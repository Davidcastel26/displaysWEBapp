import { useRouter } from 'next/navigation'

export const useDataCarousel = () => {

    const router = useRouter()

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
