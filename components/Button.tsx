import  { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface buttonprops
extends React.ButtonHTMLAttributes<HTMLButtonElement>{}


const Button = forwardRef<HTMLButtonElement,buttonprops>(({
    className,children,disabled,type="button",...props
},ref)=>{
    return(
        <button type={type}
        className={twMerge(` text-black w-full  rounded-full bg-green-500 border border-transparent px-3 py-3
        disabled:cursor-not-allowed disabled:opacity-50 font-bold hover:opacity-75 transition`,className)} disabled={disabled} ref={ref}{...props}>
            {children} 
        </button>
    )
})
Button.displayName = "button";
export default Button;