import styles from '../styles/button.module.scss';
import { useState } from 'react';

const LinkBtn = ({ title, color, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button style={{
      backgroundColor: isHovered ? 'white' : color,
      borderColor: color,
      color: isHovered ? color : 'white'
    }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={styles.linkBtn} >
      {title}
      <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
        <path d="M13 25.5C19.6274 25.5 25 20.1274 25 13.5C25 6.87258 19.6274 1.5 13 1.5C6.37258 1.5 1 6.87258 1 13.5C1 20.1274 6.37258 25.5 13 25.5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13 18.3002L17.8 13.5002L13 8.7002" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.2 13.5H17.8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  )
}

export { LinkBtn };