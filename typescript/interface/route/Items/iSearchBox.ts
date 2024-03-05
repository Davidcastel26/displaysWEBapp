
export interface SearchBoxProps {
    id: string
    name: string
    label: string
    placeholder: string
    autoComplate: boolean
    maxItems:number
    styles: Styles
    debounceWait: number | any
    listBox: (items: any) => void
    noItemMessage: () => JSX.Element;
    errorMessage: () => JSX.Element;
    transformData: (data: any) => void
    dataPromise: (query: any, signal: any) => Promise<void>
}

export interface Styles {
    label: string
    input: string
}


export interface UseTypeHeadFetchPromiseParams<TData, TTransformed> {
    query: string;
    transformData: (data: TData |any) => TTransformed;
    dataPromise: (query: string | undefined, signal: any | undefined) => Promise<void|any>;
    debounceWait: number | any;
  }