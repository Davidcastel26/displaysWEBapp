'use client'

import { ListBox } from "./ListBox"
import { NoItemFound } from "./NoItemFound";
import { SearchBox } from "./SearchBox"

const maxItems = 5;

export const ClientItems = () => {

    const transformData = ( data:any ) => data.results.slice( 0, maxItems)

    const dataPromise = async ( query: string, signal: AbortSignal ): Promise<Response> => {
        return fetch(`https://swapi.dev/api/people/?search=${query}`, { signal })
    }

  return (
    <div className="flex items-center flex-col mt-[2rem] ">
        <SearchBox 
            id="personName"
            name="personName"
            label="Lista de Items"
            placeholder="Buscar item por nombre"
            autoComplate
            styles={{
                label:"mt-[3rem] scroll-m-20 pb-1 text-xl font-semibold text-left tracking-tight transition-colors first:mt-0",
                input:"border-slate-600"
            }}
            debounceWait={ 400 }
            listBox={(items, activeIndex) => <ListBox items={items} activeIndex={activeIndex} /> }
            noItemMessage={() => <NoItemFound />}
            errorMessage={ () => <div> Lo sentimos item no encontrado</div>}
            transformData={ transformData }
            promise={ dataPromise }
        />
    </div>
  )
}
