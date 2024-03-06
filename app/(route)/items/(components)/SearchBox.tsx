"use client";
import { ChangeEventHandler, FC, useState } from "react";
import { SearchBoxProps } from "@/typescript/interface";
import { useTypeHeadFechPromise } from "@/hooks";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SearchBox: FC<SearchBoxProps> = ({
  id,
  name,
  label,
  placeholder,
  autoComplate,
  styles,
  debounceWait,
  listBox,
  noItemMessage,
  errorMessage,
  transformData,
  promise,
}) => {

  const [query, setQuery] = useState<string>("");
  const [ activeIndex, setActiveIndex ] = useState<null | number >( null )
  const [ isAutoComplate, setIsAutoComplete ] = useState( autoComplate )
  const [data, setData, error]: any = useTypeHeadFechPromise(
    query,
    transformData,
    promise,
    debounceWait,
    isAutoComplate,
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyUp = (event:any) => {
    
    const keyCode = event.keyCode;
    
    if( keyCode === 13 ){
        // user enter
        if( activeIndex === null ) return;
        setQuery( data[activeIndex].name)
        setData( null )
        setActiveIndex( null )
        setIsAutoComplete( false )
        return 
    } 
    setIsAutoComplete( true )
    if( !data || data.length === 0 ) return;

    if( keyCode === 40){
        //user down
        if( activeIndex === null || activeIndex === data.length - 1){
            setActiveIndex(0)
        }else{
            setActiveIndex( (prevenIndex ) => prevenIndex! + 1)
        }
    } else if( keyCode === 38 ){
        // move up 
        if( activeIndex === 0 ) setActiveIndex( data.length - 1 )
        else setActiveIndex(( prevIndex ) => prevIndex! -1)
    }
  }

  return (
    <>
      <Label className={styles.label} htmlFor={name}>
        {label}
      </Label>
      
      <Input
        className={styles.input}
        name={name}
        id={id}
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={ handleKeyUp }
      />
      {data && data.length > 0 && listBox(data, activeIndex)}
      { query && data && data.length === 0 && noItemMessage()}
      { error && errorMessage()}
    </>
  );
};
