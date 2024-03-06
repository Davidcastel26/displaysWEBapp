import { FC, useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce'
import { UseTypeHeadFetchPromiseParams, useTypeHeadProps } from "@/typescript/interface";

// const useTypeHeadFechPromise: FC<useTypeHeadProps> = ( query, transformData, promise)  =>{
const useTypeHeadFechPromise = (
        query: string| any, 
        transformData: (data: any) => void, 
        promise: (query: string) => Promise<Response>
) => {
    const [data, setData] = useState<any | string>(null);

    const [ error, setError ] = useState< null | any >( null )

    const fetchData = useCallback( async(query:any | string, transformData:any) => {
        try {
            const response = await promise( query );
            if( !response.ok) throw new Error(response.statusText);
            const data = await response.json();
            console.log(data);
            setData( transformData( data ) );
        } catch (error) {
            console.log( error )
            setError( error )
        }
    }, [])

    useEffect( () => {

        if( !query ) {
            setData( null )
            setError( null )
            return
        }

        fetchData( query, transformData )

    },[query, transformData, fetchData])

    return [ data, setData, error ]
}

export default useTypeHeadFechPromise;