'use client'
import { ChangeEventHandler, FC, useState } from "react"
import { SearchBoxProps } from "@/typescript/interface"
import { useTypeHeadFechPromise } from "@/hooks"
import { Input } from "@/components/ui/input"


export const SearchBox: FC<SearchBoxProps> = ({
    id,
    name, 
    label, 
    placeholder,
    autoComplate,
    maxItems,
    styles,
    debounceWait,
    listBox,
    noItemMessage,
    errorMessage,
    transformData,
    promise,
}) => {

    const [query, setQuery] = useState<string>('')

    const [data, setData, error]:any = useTypeHeadFechPromise(query, transformData, promise)


    const handleChange: ChangeEventHandler<HTMLInputElement> = ( event ) => {
        setQuery(event.target.value)
    }

    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <br />
            <Input
                className={styles.input}
                name={name}
                id={id}
                value={query}
                onChange={handleChange}
            />
            {data && data.length > 0 && listBox(data)}
        </>
    )
}