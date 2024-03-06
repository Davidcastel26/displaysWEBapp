'use client'

import { ListBox } from "./ListBox"
import { SearchBox } from "./SearchBox"

export const ClientItems = () => {

    const transformData = ( data:any ) => data.results

    const dataPromise = async ( query: string ): Promise<Response> => {
        return fetch(`https://swapi.dev/api/people/?search=${query}`)
    }

  return (
    <div className="flex items-center flex-col">
        <SearchBox 
            id="personName"
            name="personName"
            label="Enter product name"
            placeholder="Enter your fav star war char"
            autoComplate={ true }
            maxItems={5}
            styles={{
                label:"mt-[3rem] scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0",
                input:""
            }}
            debounceWait={ 400 }
            listBox={(items) => <ListBox items={items} /> }
            noItemMessage={() => <div> Lo sentimos no esta este producto 🙁</div>}
            errorMessage={ () => <div> Lo sentimos item no encontrado</div>}
            transformData={ transformData }
            promise={ dataPromise }
        />
    </div>
  )
}
