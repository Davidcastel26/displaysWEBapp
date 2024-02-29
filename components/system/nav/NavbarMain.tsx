import { ModeToggle } from "../ToggleMode"
import { MenuNav } from "./MenuNav"
import { NavbarLinks } from "./NavbarLinks"
import { UserNav } from "./user-nav"


export const NavbarMain = () => {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
            {/* <TeamSwitcher /> */}
            {/* <NavbarLinks className="mx-6" /> */}
            
            <UserNav />
            <div className="ml-auto flex items-center space-x-4">
                {/* <Search /> */}
                <ModeToggle />
                <MenuNav />
            </div>
        </div>
    </div>
  )
}
