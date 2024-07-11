import styles from './activity_main.module.scss';
import { useState, useEffect, useRef } from 'react';
import { ImgTitle } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';
import { activityList } from './activity_main_info';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const Card = ({ color, props }) => {
  const { titleKey, subtitleKey, timeKey, bodyKey, pointKey, icon } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={`${styles.card} ${pathname === '/en' && styles.cardEn}`}>
      <div className={styles.cardIcon} style={{backgroundColor: color}}>
        <img src={icon} alt="icon" className={styles.iconImg} />
      </div>
      <div className={styles.cardTitle}>
        {t(titleKey)}
        {subtitleKey && <><br />{t(subtitleKey)}</>}
      </div>
      <div className={styles.hr} style={{ backgroundColor: color }}></div>
      {timeKey && <div className={styles.cardTime}>{parse(t(timeKey))}</div>}
      <div className={styles.cardBody}>
        <div className={styles.cardText}>
          {parse(t(bodyKey))}
          <div className={styles.cardPoint}>
            {parse(t(pointKey))}
          </div>
        </div>
      </div>
    </div>
  )
}

const ScrollCardList = ({ list, color }) => {
  const [leftBtnDisable, setleftBtnDisable] = useState(true)
  const [rightBtnDisable, setRightBtnDisable] = useState(false)
  const cardRef = useRef(null)
  const location = useLocation()
  const pathname = location.pathname

  // 畫面下方會有5格card超出畫面，做了用按鈕左右滾動的功能，透過checkIfScrolledToEnd偵測是否已滾動至底部，並改變左右按鈕樣式，此功能只有在PC會顯示，小螢幕則直接滑動
  const checkIfscrolledToEnd = () => {
    if (cardRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = cardRef.current
      if (scrollLeft + clientWidth >= scrollWidth) {
        setRightBtnDisable(true)
      }
      if (scrollLeft === 0) {
        setleftBtnDisable(true)
      }
      if (scrollLeft > 0 && scrollLeft + clientWidth < scrollWidth) {
        setRightBtnDisable(false)
        setleftBtnDisable(false)
      }
    }
  }

  useEffect(() => {
    const card = cardRef.current
    if (card) {
      card.addEventListener('scroll', checkIfscrolledToEnd)
    }

    return () => {
      if (card) {
        card.removeEventListener('scroll', checkIfscrolledToEnd);
      }
    };
  },[])

  // 點擊按鈕讓cardWapper左右scroll一個卡片width+gap的距離
  const handleMoveRight = () => {
    const cardWidth = pathname === '/en' ? 300 : 264

    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: cardWidth,
        behavior: 'smooth',
      });
    }
  }

  const handleMoveLeft = () => {
    const cardWidth = pathname === '/en' ? 300 : 264

    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: -cardWidth,
        behavior: 'smooth',
      });
    }
  }

  return (
    <>
    { list.length <= 4 && (
      <div className={styles.cardContainer} >
        <div className={styles.cardWrapper} style={{width: '100%'}}>
          <div className={styles.cardList} >
            {list.map(card => {
              return <Card props={card} color={color} key={card.title}/>
              })}
          </div>
        </div>
      </div>
    )}
    { list.length > 4 && (
      <div className={styles.cardContainer}>
        <button onClick={handleMoveLeft} className={`${styles.btnLeft} ${leftBtnDisable ? styles.disable : '' }`}></button>
        <div className={styles.cardWrapper} ref={cardRef}>
          <div className={styles.cardList} >
            {list.map(card => {
              return <Card props={card} color={color} key={card.title}/>
            })}
          </div>
        </div>
        <button onClick={handleMoveRight} className={`${styles.btnRight} ${rightBtnDisable ? styles.disable : ''}`}></button>
      </div>
    )}
  </>
  )
}

const ActivityBody = ({ activity, props }) => {
  const device = useDevice()
  const { num, color, titleKey, subtitleKey, icon, dateKey, timeKey, locationKey, cardList } = props
  const { t } = useTranslation()


  return (
    <div className={`${styles.activityBody} ${num !== activity ? styles.dNone : ''}  `} style={{ color: color }}>
      <div className={styles.bodyTop}>
        <div className={styles.titleGroup} style={{ background: `${color}1A` }}>
          <img src={icon} alt="icon" className={styles.titleIcon} />
          {device === deviceParams.mobile && <h2 className={styles.title}>
            {t(titleKey)}
            {subtitleKey && <><br />{t(subtitleKey)}</>}
          </h2>}
          {device !== deviceParams.mobile && <h2 className={styles.title}>
            {t(titleKey)}
            {subtitleKey && <>・{t(subtitleKey)}</>}
          </h2>}
          <img src={icon} alt="icon" className={styles.titleIcon} />
        </div>
        <div className={styles.infoGroup}>
          <div className={styles.info}>
            <div className={styles.iconDay} style={{backgroundColor: color}}></div>
            {t(dateKey)}
          </div>
          <div className={styles.info}>
            <div className={styles.iconTime} style={{backgroundColor: color}}></div>
            {t(timeKey)}
          </div>
          <div className={styles.info}>
            <div className={styles.iconLocation} style={{backgroundColor: color}}></div>
            {t(locationKey)}
          </div>
        </div>
      </div>
      <ScrollCardList list={cardList} color={color}/>
    </div>
  )
}

const Activity = ({ activity, setActivity }) => {
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper>
        <ImgTitle
          title={t('main.title')}
          img='/title/title_2.png'
          id='activity'
          />
        <div className={`${styles.activity} ${pathname === '/en' && styles.activityEn}`}>
          <div className={styles.activityList}>
            <button className={`${styles.tab} ${styles.hover1} ${activity === 1 ? styles.activity1 : ''}`} onClick={() => setActivity(1)}>{`${t("main.title1")}・${t("main.subtitle1")}`}</button>
            <button className={`${styles.tab} ${styles.hover2} ${activity === 2 ? styles.activity2 : ''}`} onClick={()=>setActivity(2)}>{`${t("main.title2")}・${t("main.subtitle2")}`}</button>
            <button className={`${styles.tab} ${styles.hover3} ${activity === 3 ? styles.activity3 : ''}`} onClick={() => setActivity(3)}>{t("main.title3")}</button>
            <button className={`${styles.tab} ${styles.hover4} ${activity === 4 ? styles.activity4 : ''}`} onClick={()=>setActivity(4)}>{t("main.title4")}</button>
            <button className={`${styles.tab} ${styles.hover5} ${activity === 5 ? styles.activity5 : ''}`} onClick={()=>setActivity(5)}>{t("main.title5")}</button>
          </div>
          <div className={styles.bodyContainer}>
            {activityList.map(item => <ActivityBody activity={activity} props={ item } key={item.num}/> )}
          </div>
        </div>
      </Wrapper>
    </Container>
  )
}

export default Activity;