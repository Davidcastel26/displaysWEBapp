import { MapPin } from 'lucide-react';

export const Location = () => {
  return (
    <div className='flex flex-row p-4'>
        <div className='align-bottom mt-3 mr-4'>
            <MapPin />
        </div>
        <div className='flex-col'>
            <h4>Tu tienda selecionada para el pedido es:</h4>
            <p> La torre X</p>
        </div>
    </div>
  )
}
