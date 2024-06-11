import styles from './header.module.scss';
import { useEffect, useState, } from 'react';
import { useDevice } from '../../contexts/DeviceContext';

// header按鈕用list array.map()產生，透過id設定點擊後跳轉至該section
const list = [
  {title: '活動資訊',
   id: 'info', 
  },
  {title: '主題活動',
   id: 'activity',
  },
  {title: '活動報名',
   id: 'apply',
  },
  {title: '集章之旅',
   id: 'collect',
  },
  {title: '特約商店',
   id: 'store',
  },
  {title: '交通指引',
   id: 'traffic',
  },
  {title: '常見問題',
   id: 'qa',
  },
  {title: '友善連結',
   id: 'link',
  }]

// 固定畫面右下方下載電子手冊按鈕，透過useDevice偵測螢幕大小控制，只在螢幕width:1440px以上(navbar展開時)顯示
const FixedBtn = () => {
  // 正確檔案尚未發布
  const handleDownload = () => {
    alert('click fixed btn')
  }

  return (
    <button className={styles.fixedBtn} onClick={handleDownload}>
      活動
      <br />
      電子手冊
      <object data='/svg/icon_download.svg' className={styles.icon}> </object>
    </button>
  )
}


// 用useState控制Navbar打開關閉，在小螢幕時可透過點擊漢堡按鈕改變State，展開及關閉側邊navbar
const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const device = useDevice()

  // 透過useEffect偵測畫面寬度若為1440px以上時，把Navbar展開(畫面只有在1440px以上navbar文字才不會自動換行，因此設定1440段點，再小的螢幕header就會縮入側邊攔)
  useEffect(() => {
    if (device === 'PC') {
    setNavOpen(true)
    }

    if (device === 'mobile' || device === 'tablet' || device === 'laptop') {
      setNavOpen(false)
    }
  },[device])

  const handleOpenHamburger = () => {
    setNavOpen(true)
  }

  const handleCloseHamburger = () => {
    setNavOpen(false)
  }

  const handleDownload = () => {
    alert('click fixed btn')
  }

  return (
    <>
      <button className={styles.hamburger} onClick={handleOpenHamburger}></button>
      <nav className={navOpen ? styles.header : `${styles.header} ${styles.close}`}> 
        <button className={styles.closeBtn} onClick={handleCloseHamburger}></button>
        <div className={styles.logoGroup}>
          <h1 className={styles.title}>北投夏日魔法節</h1>
          <img src="/svg/header_logo.svg" alt="logo" className={styles.logo} />
        </div>
        <ul className={styles.navList}>
          {list.map((item) => {
            return (
              <li className={styles.navItem} key={item.id}>
              <a href={`#${item.id}`} className={styles.link}>{item.title}</a>
            </li>
            )
          })}
        </ul>
        <hr className={styles.hr} />
        <button className={styles.downloadBtn} onClick={handleDownload}>
          活動電子手冊下載
          <object data="/svg/download_btn.svg" aria-label="downlowd" className={styles.downloadIcon}> </object>
        </button>
        <div className={styles.language}>
          <button className={`${styles.languageBtn} ${styles.active}`}>繁體中文</button>
          <button className={styles.languageBtn}>English</button>
        </div>
      </nav>
      {device === 'PC' && <FixedBtn />}
    </>
  )
}

export default Header;