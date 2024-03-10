import { ItemProps } from "./index";

export interface SearchBoxProps{
  id: string;
  name: string;
  label: string;
  placeholder: string;
  autoComplate: boolean;
  styles: Styles;
  debounceWait: number;
  listBox: (items: ItemProps[], activeIndex: number | null) => JSX.Element; 
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




export interface useTypeHeadProps {
  query: string| any;
  transformData: (data: any) => void;
  promise: ( query: string, signal: AbortSignal ) => Promise<Response>;
  debounceWait: number;
}