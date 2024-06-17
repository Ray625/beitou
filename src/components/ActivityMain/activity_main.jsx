import styles from './activity_main.module.scss';
import { useState, useEffect, useRef } from 'react';
import { ImgTitle } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';
import { activityList } from './activity_main_info';

const Card = ({ color, props }) => {
  const {title, subtitle, body, icon} = props

  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>
        {title}
        {subtitle && <><br />{subtitle}</>}
      </div>
      <div className={styles.hr} style={{ backgroundColor: color }}></div>
      <div className={styles.cardBody}>{body}</div>
      <div className={styles.cardIcon} style={{backgroundColor: color}}>
        <img src={icon} alt="icon" className={styles.iconImg} loading='lazy'/>
      </div>
    </div>
  )
}

const ScrollCardList = ({ list, color }) => {
  const [leftBtnDisable, setleftBtnDisable] = useState(true)
  const [rightBtnDisable, setRightBtnDisable] = useState(false)
  const cardRef = useRef(null)

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
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: 264,
        behavior: 'smooth',
      });
    }
  }

  const handleMoveLeft = () => {
    if (cardRef.current) {
      cardRef.current.scrollBy({
        left: -264,
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
  const {num, color, title, subtitle, icon, date, time, location, describe, cardList } = props
  
  return (
    <div className={`${styles.activityBody} ${num !== activity ? styles.dNone : ''}  `} style={{color: color}}>
      <div className={styles.titleGroup} style={{ background: `${color}1A` }}>
        <img src={icon} alt="icon" className={styles.titleIcon} loading='lazy'/>
        {device === 'mobile' && <h2 className={styles.title}>
          {title}
          {subtitle && <><br />{subtitle}</>}
        </h2>}
        {device !== 'mobile' && <h2 className={styles.title}>
          {title}
          {subtitle && <>・{subtitle}</>}
        </h2>}
        <img src={icon} alt="icon" className={styles.titleIcon} loading='lazy'/>
      </div>
      <div className={styles.infoGroup}>
        <div className={styles.info}>
          <div className={styles.iconDay} style={{backgroundColor: color}}></div>
          {date}
        </div>
        <div className={styles.info}>
          <div className={styles.iconTime} style={{backgroundColor: color}}></div>
          {time}
        </div>
        <div className={styles.info}>
          <div className={styles.iconLocation} style={{backgroundColor: color}}></div>
          {location}
        </div>
      </div>
      <div className={styles.describe}>
        {describe}
      </div>
      <ScrollCardList list={cardList} color={color}/>
    </div>
  )  
}

const Activity = ({ activity, setActivity }) => {
  
  return (
    <section className={styles.container} >
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='主題活動'
          img='/title/title_2.png'
          id='activity'
        />
        <div className={styles.activity}>
          <div className={styles.activityList}>
            <button className={`${styles.tab} ${styles.hover1} ${activity === 1 ? styles.activity1 : ''}`} onClick={()=>setActivity(1)}>北投酒家菜・宴席活動</button>
            <button className={`${styles.tab} ${styles.hover2} ${activity === 2 ? styles.activity2 : ''}`} onClick={()=>setActivity(2)}>復刻酒家菜・音樂同歡唱</button>
            <button className={`${styles.tab} ${styles.hover3} ${activity === 3 ? styles.activity3 : ''}`} onClick={()=>setActivity(3)}>親子冒險島</button>
            <button className={`${styles.tab} ${styles.hover4} ${activity === 4 ? styles.activity4 : ''}`} onClick={()=>setActivity(4)}>親子魔法樂園</button>
            <button className={`${styles.tab} ${styles.hover5} ${activity === 5 ? styles.activity5 : ''}`} onClick={()=>setActivity(5)}>夏日好聲音派對</button>
          </div>
          <div className={styles.bodyContainer}>
            {activityList.map(item => <ActivityBody activity={activity} props={ item } key={item.num}/> )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activity;