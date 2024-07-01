import styles from './header.module.scss';
import { useEffect, useState, } from 'react';
import { useDevice } from '../../contexts/DeviceContext';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// header按鈕用list array.map()產生，透過id設定點擊後跳轉至該section
const list = [
  {
    textKey: "header.link1",
    id: 'info',
  },
  {
    textKey: "header.link2",
    id: 'activity',
  },
  {
    textKey: "header.link3",
    id: 'apply',
  },
  {
    textKey: "header.link4",
    id: 'collect',
  },
  {
    textKey: "header.link5",
    id: 'store',
  },
  {
    textKey: "header.link6",
    id: 'traffic',
  },
  {
    textKey: "header.link7",
    id: 'qa',
  },
  {
    textKey: "header.link8",
    id: 'link',
  }]

// 固定畫面右下方下載電子手冊按鈕，透過useDevice偵測螢幕大小控制，只在螢幕width:1440px以上(navbar展開時)顯示
const FixedBtn = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  const handleDownload = () => {
    const pdfUrl = '/activity_book.pdf';
    window.open(pdfUrl, '_blank');
  }

  return (
    <button className={`${styles.fixedBtn} ${pathname === '/en' && styles.smallFont}`} onClick={handleDownload}>
      {t("header.downloadBtnText1")}
      <br />
      {t("header.downloadBtnText2")}
      <img src="/svg/icon_download.svg" alt="icon" className={styles.icon} loading='lazy' />
    </button>
  )
}


// 用useState控制Navbar打開關閉，在小螢幕時可透過點擊漢堡按鈕改變State，展開及關閉側邊navbar
const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const device = useDevice()
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  // 透過useEffect偵測畫面寬度若為1440px以上時，把Navbar展開(畫面只有在1440px以上navbar文字才不會自動換行，因此設定1440段點，再小的螢幕header就會縮入側邊攔)
  useEffect(() => {
    if (device === 3) {
    setNavOpen(true)
    }

    if (device === 0 || device === 1 || device === 2) {
      setNavOpen(false)
    }
  }, [device])

  const handleOpenHamburger = () => {
    setNavOpen(true)
  }

  const handleCloseHamburger = () => {
    if (device === 3) return
    setNavOpen(false)
  }

  const handleKeyDown = (e) => {
    if (device === 3) return
    if (e.key === 'Enter' || e.key === ' ') {
      setNavOpen(false)
    }
  };

  const handleDownload = () => {
    const pdfUrl = '/activity_book.pdf';
    window.open(pdfUrl, '_blank');
  }

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNavigate = (path) => {
    if (pathname === path) return
    window.location.href = path
  };

  return (
    <>
      <button className={styles.hamburger} onClick={handleOpenHamburger}></button>
      <nav className={navOpen ? styles.header : `${styles.header} ${styles.close}`}>
        <button className={styles.closeBtn} onClick={handleCloseHamburger}></button>
        <button className={styles.logoGroup} onClick={handleScrollToTop}>
          <h1 className={styles.title}>{t('title')}</h1>
          <img src="/svg/header_logo.svg" alt="logo" className={styles.logo} loading='lazy'/>
        </button>
        <div className={styles.navList} onClick={handleCloseHamburger} onKeyDown={handleKeyDown} role="link"  tabIndex="0" >
          {list.map((item) => {
            return (
              <div className={styles.navItem} key={item.id}>
              <a href={`#${item.id}`} className={styles.link}>{t(item.textKey)}</a>
            </div>
            )
          })}
        </div>
        <hr className={styles.hr} />
        <button className={styles.downloadBtn} onClick={handleDownload}>
          {t("header.download")}
          <img src="/svg/download_btn.svg" alt="downlowd" className={styles.downloadIcon} loading='lazy'/>
        </button>
        <div className={styles.language}>
          <button className={`${styles.languageBtn} ${(pathname === '/') ? styles.active : ''}`} onClick={() => handleNavigate('/')}>繁體中文</button>
          <button className={`${styles.languageBtn} ${(pathname === '/en') ? styles.active : ''}`} onClick={() => handleNavigate('/en')}>English</button>
        </div>
      </nav>
      {device === 3 && <FixedBtn />}
    </>
  )
}

export default Header;