'use client'

import { ListBox } from "./ListBox"
import { SearchBox } from "./SearchBox"

const maxItems = 5;

export const ClientItems = () => {

    const transformData = ( data:any ) => data.results.slice( 0, maxItems)

    const dataPromise = async ( query: string, signal: AbortSignal ): Promise<Response> => {
        return fetch(`https://swapi.dev/api/people/?search=${query}`, { signal })
    }

  return (
    <div className="flex items-center flex-col">
        <SearchBox 
            id="personName"
            name="personName"
            label="Enter product name"
            placeholder="Enter your fav star war char"
            autoComplate
            styles={{
                label:"mt-[3rem] scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0",
                input:""
            }}
            debounceWait={ 400 }
            listBox={(items, activeIndex) => <ListBox items={items} activeIndex={activeIndex} /> }
            noItemMessage={() => <div> Lo sentimos no esta este producto 🙁</div>}
            errorMessage={ () => <div> Lo sentimos item no encontrado</div>}
            transformData={ transformData }
            promise={ dataPromise }
        />
    </div>
  )
}
