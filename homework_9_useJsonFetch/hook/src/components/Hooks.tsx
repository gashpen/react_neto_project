import { useEffect, useState } from "react"

const Hooks = () => {

    interface Options{
        method?:string
    }

    function useJsonFetch(url:string,opts:Options) {
        const [data,setData] = useState()
        const [err,setErr] = useState<boolean>()
        const [loading,setLoading] = useState()
        useEffect(()=>{

            fetch(url,opts)
            .then((response)=>setLoading(response.ok))
            .then((response)=>response.json())
            .then((data)=>setData(data))
            .catch(error => {
                setErr(error)
            });

        },[])
        
        return [data,err,loading]
    }

    const [data,error,loading] = useJsonFetch("http://localhost:7070/loading",{method:'GET'});
    
    return ( 
        <div>

        </div>
     );
}

export default Hooks;



