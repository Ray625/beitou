import { useState, useEffect } from "react";

const useRWD = () => {
  const [device, setDevice] = useState('mobile');

  const handleRWD = () => {
    if (window.innerWidth >= 1440) {
      setDevice('PC')
    } else if (1440 > window.innerWidth && window.innerWidth >= 1024) {
      setDevice('laptop')
    } else if (1024 > window.innerWidth && window.innerWidth >= 768) {
      setDevice('tablet')
    } else { 
      setDevice('mobile')
    }
  }

  useEffect(()=> {
    window.addEventListener('resize', handleRWD)
    handleRWD()
    
    return (()=> {
      window.removeEventListener('resize', handleRWD)
    })
  },[])

  return device;
}

export default useRWD;