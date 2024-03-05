
export interface SearchBoxProps{
    id: string;
    name: string;
    label: string;
    placeholder: string;
    autoComplate: boolean; // There's a typo here, should it be autoComplete?
    maxItems: number;
    styles: Styles;
    debounceWait: number;
    listBox: (items: any[]) => JSX.Element; // Consider defining a type for items
    noItemMessage: () => JSX.Element;
    errorMessage: () => JSX.Element;
    transformData: (data: any) => any; // Define specific types for input/output if possible
    dataPromise: (query: string, signal: AbortSignal) => Promise<any>; // Define the expected return type of the promise
  }

export interface Styles {
    label: string
    input: string
}


export interface UseTypeHeadFetchPromiseParams<TData, TTransformed> {
    query: string;
    transformData: (data: TData) => TTransformed;
    dataPromise: (query: string, signal: string) => Promise<TData | any>;
    debounceWait: number;
  }