import { useEffect } from "react"

const useTitle=(title)=>{
    useEffect(()=>{
        document.title =`${title} - Chef Kitchen`
    },[title])
}

export default useTitle