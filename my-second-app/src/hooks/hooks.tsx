import { useEffect, useState } from "react"



export default function Hooks() {
     const [count,setCount] = useState<number>(0)
    useEffect(() => {
       
        console.log("start render")
    },[count])
    return <>
        <div>count:{count}</div>
        <button onClick={()=>setCount((prev) => prev+1)}>click me</button>
        
    </>
}