import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `HeroVerse | ${title}`;
    },[title])
}
export default useTitle;