
import { NavbarMain } from '@/components/system'
import { ReactNode } from 'react'

const layout = (
    {children}:{children: ReactNode}
  ) => {
    return (
    <div>
        <NavbarMain />
        <div className="container mx-auto">
          {children}
        </div>
    </div>
  )
}

export default layout;