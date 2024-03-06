import { ItemProps } from "./index";

export interface SearchBoxProps{
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplate: boolean;
  maxItems: number;
  styles: Styles;
  debounceWait: number;
  listBox: (items: ItemProps[]) => JSX.Element; 
  noItemMessage: () => JSX.Element;
  errorMessage: () => JSX.Element;
  transformData: (data: ItemProps) => void;
  promise: (query: string, signal: AbortSignal) => Promise<Response>; 
}
  // promise: (query: string, signal: AbortSignal) => Promise<any>; 
  // promise: (query: string) => Promise<void>; 

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

export interface useTypeHeadProps {
  query: string| any;
  transformData: (data: any) => void;
  promise: ( query: string, signal: AbortSignal ) => Promise<Response>;
  debounceWait: number;
}