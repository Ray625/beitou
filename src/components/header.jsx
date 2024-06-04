import styles from '../styles/header.module.scss';
import { useEffect, useState, } from 'react';
import useRWD from '../hooks/useRWD';

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

const Header = () => {
  const [navOpen, setNavOpen] = useState(true)

  const device = useRWD()

  useEffect(() => {
    if (device === 'PC') {
    setNavOpen(true)
    }

    if (device === 'mobile' || device === 'tablet') {
      setNavOpen(false)
    }
  },[device])

  const handleOpenHamburger = () => {
    setNavOpen(true)
  }

  const handleCloseHamburger = () => {
    setNavOpen(false)
  }

  return (
    <>
      <div className={styles.hamburger} onClick={handleOpenHamburger}></div>
      <nav className={navOpen ? styles.header : `${styles.header} ${styles.close}`}>
        <div className={styles.closeBtn} onClick={handleCloseHamburger}></div>
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
        <div className={styles.downloadBtn}>
          活動電子手冊下載
          <object data="/svg/download_btn.svg" aria-label="downlowd" className={styles.downloadIcon}> </object>
        </div>
        <div className={styles.language}>
          <button className={`${styles.languageBtn} ${styles.active}`}>繁體中文</button>
          <button className={styles.languageBtn}>English</button>
        </div>
      </nav>
    </>
  )
}

export default Header;