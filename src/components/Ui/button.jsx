import styles from './button.module.scss';
import { useState } from 'react';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';

// 外部連結的按鈕，因為每個按鈕hover的顏色不同，想透過js傳入hover的顏色，但原本用object導入svg又無法改動svg顏色，最後直接把svg寫在html中，並設定stroke="currentColor"，並用state做出hover的效果
const LinkBtn = ({ title, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const device = useDevice()

  // 只在大螢幕加上hover效果
  const onMouseEnter = () => {
    if (device === deviceParams.pc || device === deviceParams.laptop) {
      setIsHovered(true)
    }
    return
  }

  return (
    <button style={{
      backgroundColor: isHovered ? 'white' : color,
      borderColor: color,
      color: isHovered ? color : 'white'
    }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={styles.linkBtn} >
      {title}
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <path d="M13 25.5C19.6274 25.5 25 20.1274 25 13.5C25 6.87258 19.6274 1.5 13 1.5C6.37258 1.5 1 6.87258 1 13.5C1 20.1274 6.37258 25.5 13 25.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 18.3002L17.8 13.5002L13 8.7002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.2 13.5H17.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}

export { LinkBtn };