"use client"
import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import userAuthmodal from "@/hooks/useAuthmodal";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useUser } from "@/hooks/useuser";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import usePlayer from "@/hooks/usePlayer";

interface headerprops{
    children:React.ReactNode;
    classname?:string;
}


const Header:React.FC<headerprops> = ({children,classname})=>{

    const router = useRouter();
    const authmodal  = userAuthmodal();
    const supabaseclient = useSupabaseClient();
    const {user,subscription} = useUser();
    const player = usePlayer();
    const handlelayout = async()=>{
        const {error} = await supabaseclient.auth.signOut()
        player.reset();
        router.refresh();
        
        if(error){
           toast.error(error.message);
        }
        else{
            toast.success('Logged Out')
        }

    }
    return (
        <div className= {twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`,classname)}>
            <div className="w-full mb-4  flex items-center justify-between" >
                <div className="hidden md:flex gap-x-2 items-center">
                    <button  onClick={()=>router.back}

                     className="rounded-full bg-black flex items-center justify-center 
                    hover:opacity-75 transition">
                        <RxCaretLeft className="text-white" size={35} />
                    </button>
                    <button  onClick={()=>router.forward}
                    
                    className="rounded-full bg-black flex items-center justify-center 
                    hover:opacity-75 transition">
                        <RxCaretRight className="text-white" size={35} />
                    </button>

                </div>
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-black " size={20}/>
                    </button>
                    <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-black " size={20}/>
                    </button>
                </div>
                <div className="flex justify-between  items-center gap-x-4">
                    {user ?(
                        <div className="flex gap-x4 items-center">
                             <Button onClick={handlelayout}
                             className="bg-white px-6 py-2">
                                Logout
                             </Button>
                             <Button onClick={()=>router.push('/account')}
                             className="bg-white">
                                <FaUserAlt />
                             </Button>
                             </div>
                    ):(
                    <>
                    <div>
                        <Button onClick={authmodal.onOpen}  className="bg-transparent text-neutral-300 font-medium ">
                            Sign Up
                        </Button>
                    </div>
                    <div>
                        <Button onClick={authmodal.onOpen} className="  bg-white px-6 py-2 ">
                            Log In
                        </Button>
                    </div>
                    </>
                )}
                </div>
            </div>
            {children}
        </div>
    )
}
export default Header;