
import { useMarketPalceStore } from '@/stores/route/superMarket/storePlace.store';
import { MapPin,
        ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Location = () => {

    const titleLocation = `Tu tienda selecionada para el pedido es:`
    
    const nameLocation = useMarketPalceStore( state => state.name )
    const supermarketAddress = `Haz click para seleccionar una tienda`
    const location = nameLocation.length == 0 || !nameLocation ? supermarketAddress : nameLocation

  return (
    <div className='flex flex-row p-4'>
        <div className='pt-[2rem] mr-3'>
            <MapPin />
        </div>
        <Link href="/stores" >
        <div className='flex-col'>
            <h4 className='scroll-m-10 text-lg font-semibold tracking-tight first:mt-0'>
                { titleLocation }
            </h4>
            <div className='flex m-1'>
                <p className="scroll-m-10 border-b pb-2 text-lg font-light tracking-tight first:mt-0">
                    { location }
                </p>
                <ArrowRight />
            </div>
        </div>
        </Link>
    </div>
  )
}
