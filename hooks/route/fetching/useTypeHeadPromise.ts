import { FC, useCallback, useEffect, useState } from "react";
import debounce from 'lodash/debounce'
import { UseTypeHeadFetchPromiseParams } from "@/typescript/interface";

// const useTypeHeadFechPromise = <TData, TTransformed>({
const useTypeHeadFechPromise = <TData, TTransformed>({
    query,
    transformData,
    dataPromise,
    debounceWait
  }: UseTypeHeadFetchPromiseParams<TData, TTransformed>) => {

    // const [ dataSave, setDataSave ] = useState( null )
    const [dataSave, setDataSave] = useState<any | null>(null);
    const [ error, setError ] = useState< null | any >( null )

    const fetchData = useCallback(
        debounce( async( query, transformData, signal) => {
            try {
                
                const response = await dataPromise(query, signal);
                if( !response.ok) throw new Error(response.statusText)
                const data = await response.json()
                console.log(data);
                setDataSave(transformData(data))

            } catch (error) {
                console.log(error);
                if(!signal.abort) setError(error)
            }
        }, debounceWait),
    [])

    useEffect( () => {

        if( !query ){
            setDataSave(null)
            setError(null)
            return
        }

        const controller = new AbortController()
        const signal = controller.signal

        fetchData( query, transformData, signal )

        //cleaning fuction
        return() => {
            controller.abort()
        }

    },[query, transformData, fetchData])

    return [ dataSave, setDataSave, error]
}

export default useTypeHeadFechPromise;