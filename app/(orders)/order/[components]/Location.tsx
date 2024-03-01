
import { MapPin,
        ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Location = () => {

    const supermarketAddress = `Supermercado La Torre C.C. Flores Del Lago`
    const titleLocation = `Tu tienda selecionada para el pedido es:`


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
                    { supermarketAddress }
                </p>
                <ArrowRight />
            </div>
        </div>
        </Link>
    </div>
  )
}
