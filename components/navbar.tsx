import { UserButton } from "@clerk/nextjs"
import { MainNav } from "./main-nav"
import StoreSwitcher from "./store-switcher"

const Navbar =()=>{
    return(
        <div className="border-b">
           <div className="flex h-16 items-center px-4">
<StoreSwitcher/>
<MainNav/>
<div className="ml-auto flex items-center space-x-a4">
    <UserButton />
</div>
           </div>
        </div>
    )
}
export default Navbar