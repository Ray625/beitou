import { createContext, useContext, useEffect, useState } from "react";

// 透過Context讓compenet共用目前螢幕寬度資訊
const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState('mobile');

  const handleRWD = () => {
    if (window.innerWidth >= 1440) {
      setDevice('PC')
    } else if (1440 > window.innerWidth && window.innerWidth >= 991) {
      setDevice('laptop')
    } else if (991 > window.innerWidth && window.innerWidth >= 768) {
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
  }, [])
  
  return (
    <DeviceContext.Provider value={device}>
      {children}
    </DeviceContext.Provider>
  )
}

export const useDevice = () => {
  return useContext(DeviceContext)
}