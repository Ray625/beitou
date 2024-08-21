import styles from './homepage.module.scss'
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import KeyVisionBanner from '../components/Kv/kv';
import Header from '../components/Header/header'
import Info from '../components/ActivityInfo/activity_Info';
import Map from '../components/ActivityInfo/activity_map';
import Attraction from '../components/ActivityInfo/activity_attraction';
import Landscape from '../components/ActivityInfo/activity_landscape';
import Activity from '../components/ActivityMain/activity_main';
import Apply from '../components/ActivityApply/activity_apply';
import Collect from '../components/ActivityCollection/activity_collect';
import CollectSocail from '../components/ActivityCollection/activity_collect_social';
import Store from '../components/ActivityStore/activity_store';
import Lottery from '../components/ActivityStore/activity_store_lottery';
import Traffic from '../components/Traffic/traffic';
import QA from '../components/QA/QA';
import Footer from '../components/Footer/footer';


const Homepage = () => {
  const [activity, setActivity] = useState(1)
  const location = useLocation()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScrollToSection = () => {
    const { hash } = location
    if (hash) {
        const sectionId = hash.substring(1)
        const section = document.getElementById(sectionId)
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('load', handleScrollToSection)

    return () => {
      window.removeEventListener('load', handleScrollToSection)
    }
  }, [])

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const lng = pathParts[1];
    const validLngs = ["en", "zh"];

    if (lng.length > 20) {
      navigate("/zh");
    }

    if (!validLngs.includes(lng)) {
      navigate("/zh");
    }
  }, [location, navigate]);

  // 如果瀏覽器語言是英文會自動將網址列跳轉至en
  useEffect(() => {
    const { language } = i18n

    if (language.includes('en')) {
      navigate('/en')
    } else {
      navigate('/zh')
    }
  },[])


  // Info頁可透過點擊連結至Activity頁，並改變上方tab為所選活動
  const handleClick = (num) => {
    setActivity(num)
  }

  return (
    <div className={styles.homepage}>
      <Header />
      <KeyVisionBanner />
      <Info setActivity={setActivity} />
      <Map />
      <Attraction />
      <Landscape />
      <Activity
        activity={activity}
        setActivity={handleClick}
      />
      <Apply />
      <Collect />
      <CollectSocail />
      <Store />
      <Lottery />
      <Traffic />
      <QA />
      <Footer />
    </div>
  )
}

export default Homepage;