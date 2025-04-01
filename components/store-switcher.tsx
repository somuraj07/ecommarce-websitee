"use client"
import { Store } from "@prisma/client";
import { PopoverTrigger } from "./ui/popover";
import { useStoreModal } from "@/hooks/use-store-modal";


type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface StoreSwitcherProps extends PopoverTriggerProps{
    items:Store[];
}
export default function StoreSwitcher({
className,
items=[]
}:StoreSwitcherProps){
const storeModel = useStoreModal();




    return(
        <div>
            store swither
        </div>
    );
};