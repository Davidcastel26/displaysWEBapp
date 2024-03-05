'use client'

export const ListBox = ({ items }: any) => {
  return (
    <ul>
    {
        items.map((item: any, index: any) => (
            <li key={index}>
                { item.name }
            </li>
        ))
    }
    </ul>
  )
}
