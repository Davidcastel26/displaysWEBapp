
import { NavbarMain } from '@/components/system'
import { ReactNode } from 'react'

const layout = (
    {children}:{children: ReactNode}
  ) => {
    return (
    <div>
        <NavbarMain />
        {children}
    </div>
  )
}

export default layout;