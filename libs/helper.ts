import { Price } from "@/types";
import { json } from "stream/consumers";

export const getUrl = ()=>{
    let url = 
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_VERCEL_URL ??
    "http://localhost:3000/"

    url =url.includes('http') ? url :`https://${url}`;
    url =url.charAt(url.length-1) === '/' ?url:`${url}/`;
    return url;
}

export const postData = async({url,data}:{url:string,data?:{price:Price}})=>{
    console.log("Post Request",url,data)

    const res:Response = await fetch(url,{
        method:'POST',
        headers:new Headers({'Content-Type':'apllication/json'}),
        credentials:'same-origin',
        body:JSON.stringify(data)
    })
    if(!res.ok){
        console.log("error in the post",{url,data,res})
        throw new Error(res.statusText);
    }
    return res.json();  
}

export const toDateTime = (secs: number) => {
    var t = new Date("1970-01-01T00:30:00Z")
    t.setSeconds(secs)
    return t
  }