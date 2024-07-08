import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface sidebaritemprops {
    icons:IconType;
    label:string;
    active?:boolean;
    href:string;
}
const Sidebaritem:React.FC<sidebaritemprops > = ({icons:Icons,label,active,href})=>{
    return(
        <Link href={href}
        className={twMerge(`flex
        flex-row
        h-auto
        items-center
        w-full
        gap-x-4
        text-md
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400 
        py-1`,
        active && "text-white")}>
            <Icons size={26}/>
            <p className="truncate w-full">{label}</p>
        </Link>
    )
}
export default Sidebaritem;