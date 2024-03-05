'use client'

import { ListBox } from "./ListBox"
import { SearchBox } from "./SearchBox"

export const ClientItems = () => {


    const transformData = ( data:any ) => data.results

    const dataPromise = async (query: string, signal: any ) => {
        await fetch(`https://swapi.dev/api/people/?search=${query}`,{signal})
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
                label:"",
                input:""
            }}
            debounceWait={ 400 }
            listBox={(items) => <ListBox items={items} /> }
            noItemMessage={() => <div> Lo sentimos no esta este producto 🙁</div>}
            errorMessage={ () => <div> Lo sentimos item no encontrado</div>}
            transformData={ transformData }
            dataPromise={ dataPromise }
        />
    </div>
  )
}
