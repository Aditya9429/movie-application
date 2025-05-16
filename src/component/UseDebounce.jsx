import { useEffect, useState } from 'react'

export default function Usedebounce(paramValue,delay = 1000) {
  
  const [debounceValue , setDebounceValue] = useState(paramValue);

  useEffect(()=>{
    const timeoutId = setTimeout(()=>{
        setDebounceValue(paramValue);
    },delay)

    return ()=> clearTimeout(timeoutId);
  
  },[paramValue,delay])
  return debounceValue
   
}
