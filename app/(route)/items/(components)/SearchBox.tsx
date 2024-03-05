'use client'
import { ChangeEventHandler, FC, useState } from "react"
import { SearchBoxProps } from "@/typescript/interface"
import { useTypeHeadFechPromise } from "@/hooks"


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
    dataPromise,
}) => {

    const [query, setQuery] = useState<string>('')
    const [dataSave, setDataSave, error] = useTypeHeadFechPromise(
        query, 
        transformData, 
        dataPromise, 
        debounceWait)

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event ) => {
        setQuery(event.target.value)
    }

    return (
        <>
            <label className={styles.label} htmlFor={name}>
                {label}
            </label>
            <br />
            <input
                className={styles.input}
                name={name}
                id={id}
                value={query}
                onChange={handleChange}
            />
            {dataSave && dataSave.length > 0 && listBox(dataSave)}
        </>
    )
}