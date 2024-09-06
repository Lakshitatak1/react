import React, { useEffect, useState } from "react";
 
export default function Github() {
    const [data,setData] = useState("");
    useEffect(()=>{
        fetch('https://api.github.com/users/Lakshitatak1')
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[])
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
             Github followers:{data.followers}
             <img src={data.avatar_url} alt="GitPicture" width={300} />
             </div>
        </>
    )
}