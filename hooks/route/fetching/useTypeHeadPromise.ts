import { FC, useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce"; //
import {
  UseTypeHeadFetchPromiseParams,
  useTypeHeadProps,
} from "@/typescript/interface";


const useTypeHeadFechPromise = (
  query: string | any,
  transformData: (data: any) => void,
  promise: (query: string, signal: AbortSignal ) => Promise<Response>,
  debounceWait: number
) => {

  const [data, setData] = useState<any | string>(null);

  const [error, setError] = useState<null | any>(null);

  const fetchData = useCallback(
    debounce(
      async (query: any | string, transformData: any, signal: AbortSignal ) => {
        try {
          const response = await promise(query, signal);
          if (!response.ok) throw new Error(response.statusText);
          const data = await response.json();
          console.log(data);
          setData(transformData(data));
        } catch (error) {
          console.log(error);
          setError(error);
        }
      },
      debounceWait
    ),
    []
  );

  useEffect(() => {

    if (!query) {
      setData(null);
      setError(null);
      return;
    }

    // in this place we need to create a signal since when we delete in the input at some point is making a call and it wont allow it while deleting a text 

    const controller = new AbortController()
    const signal = controller.signal

    // query is the name from the prodcut
    // transformData is gettting the response [] and getting {data}
    // debounceWait is the time to wait to make the fecth
    fetchData(query, transformData, signal);

    // clean function 
    return() => {
        // every time the query change this will run first
        controller.abort();
    }

  }, [query, transformData, fetchData ]);

  return [data, setData, error];
};

export default useTypeHeadFechPromise;
