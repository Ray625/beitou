import styles from './header.module.scss';
import { useEffect, useState, } from 'react';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';
import { useLocation, useNavigate } from 'react-router-dom';
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
const FixedBtn = ({onClick}) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  return (
    <button className={`${styles.fixedBtn} ${pathname === '/en' && styles.smallFont}`} onClick={onClick}>
      {t("header.downloadBtnText1")}
      <br />
      {t("header.downloadBtnText2")}
      <img src="/svg/icon_download.svg" alt="icon" className={styles.icon}  />
    </button>
  )
}


// 用useState控制Navbar打開關閉，在小螢幕時可透過點擊漢堡按鈕改變State，展開及關閉側邊navbar
const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  const device = useDevice()
  const { t, i18n } = useTranslation()
  const { pathname } = useLocation()
  const lang = i18n.language
  const navigate = useNavigate()

  // 透過useEffect偵測畫面寬度若為1440px以上時，把Navbar展開(畫面只有在1440px以上navbar文字才不會自動換行，因此設定1440段點，再小的螢幕header就會縮入側邊攔)
  useEffect(() => {
    if (device === deviceParams.pc) {
    setNavOpen(true)
    }

    if (device === deviceParams.mobile || device === deviceParams.tablet || device === deviceParams.laptop) {
      setNavOpen(false)
    }
  }, [device])

  const handleOpenHamburger = () => {
    setNavOpen(true)
  }

  const handleCloseHamburger = () => {
    if (device === deviceParams.pc) return
    setNavOpen(false)
  }

  const handleKeyDown = (e) => {
    if (device === deviceParams.pc) return
    if (e.key === 'Enter' || e.key === ' ') {
      setNavOpen(false)
    }
  };

  const handleDownload = () => {
    let pdfUrl = '/2024_bt_summer_festival_electronic_brochure_zh.pdf';
    if (pathname === '/zh') {
      pdfUrl = '/2024_bt_summer_festival_electronic_brochure_zh.pdf'
    } else if (pathname === '/en') {
      pdfUrl = '/2024_bt_summer_festival_electronic_brochure_en.pdf'
    }
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
    navigate(path)
    if (path === '/zh') i18n.changeLanguage('zh')
    if (path === '/en') i18n.changeLanguage('en')
  };

  return (
    <>
      <button className={styles.hamburger} onClick={handleOpenHamburger}></button>
      <nav className={navOpen ? styles.header : `${styles.header} ${styles.close}`}>
        <button className={styles.closeBtn} onClick={handleCloseHamburger}></button>
        <button className={styles.logoGroup} onClick={handleScrollToTop}>
          <h1 className={styles.title}>{t('title')}</h1>
          <img src="/svg/header_logo.svg" alt="logo" className={styles.logo} />
        </button>
        <div className={styles.navItemList} onClick={handleCloseHamburger} onKeyDown={handleKeyDown} role="link"  tabIndex="0">
          <div className={styles.navList}>
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
            <img src="/svg/download_btn.svg" alt="downlowd" className={styles.downloadIcon} />
          </button>
          <div className={styles.language}>
            <button className={`${styles.languageBtn} ${(lang.includes('zh')) ? styles.active : ''}`} onClick={() => handleNavigate('/zh')}>繁體中文</button>
            <button className={`${styles.languageBtn} ${(lang.includes('en')) ? styles.active : ''}`} onClick={() => handleNavigate('/en')}>English</button>
          </div>
        </div>
      </nav>
      {device === deviceParams.pc && <FixedBtn onClick={handleDownload} />}
    </>
  )
}

export default Header;