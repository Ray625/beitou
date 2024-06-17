import styles from './activity_main.module.scss';
import { useState, useEffect, useRef } from 'react';
import { ImgTitle } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';

// 透過父層傳入的state及setState改變畫面上方tab及下方body內容，body內容還沒確定，所以只有先做上方tab及下方card scroll功能，等內容確定後一樣會依照父層state改變顯示畫面
const Activity = ({ activity, setActivity }) => {
  const device = useDevice()
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
          <div className={styles.activityBody}>
            <div className={styles.titleGroup}>
              <object data='/svg/icon_note.svg' className={styles.titleicon}> </object>
              {device === 'mobile' && <h2 className={styles.title}>復刻酒家菜<br />音樂同歡唱</h2>}
              {device !== 'mobile' && <h2 className={styles.title}>復刻酒家菜・音樂同歡唱</h2>}
              <object data='/svg/icon_note.svg' className={styles.titleicon}> </object>
            </div>
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <object data='/svg/icon_activity_day.svg' className={styles.icon}> </object>
                7/6(六) ~ 7/7(日)
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_activity_time.svg' className={styles.icon}> </object>
                15:00 ~ 20:00
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_activity_pin.svg' className={styles.icon}> </object>
                北投七星公園舞台
              </div>
            </div>
            <div className={styles.describe}>
              邀請北投溫泉飯店及酒家菜業者一起共相盛舉「北投夏日魔法節」現場販售美味酒家菜，還有限量銅板價台鐵酒家菜便當讓民眾品嚐，並邀請專業歌手演出經典那卡西歌曲，讓民眾享受酒家菜一邊聆聽那卡西動人旋律。
            </div>
            <div className={styles.cardContainer}>
              <button onClick={handleMoveLeft} className={`${styles.btnLeft} ${leftBtnDisable ? styles.disable : '' }`}></button>
              <div className={styles.cardWrapper} ref={cardRef}>
                <div className={styles.cardList} >
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>
                      那卡西與酒家菜<br/>經典重現
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                    <div className={styles.cardIcon}>
                      <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} loading='lazy'/>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>
                      那卡西與酒家菜<br/>經典重現
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                    <div className={styles.cardIcon}>
                      <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} loading='lazy'/>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>
                      那卡西與酒家菜<br/>經典重現
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                    <div className={styles.cardIcon}>
                      <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} loading='lazy'/>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>
                      那卡西與酒家菜<br/>經典重現
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                    <div className={styles.cardIcon}>
                      <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} loading='lazy'/>
                    </div>
                  </div>
                  <div className={styles.card}>
                    <div className={styles.cardTitle}>
                      那卡西與酒家菜<br/>經典重現
                    </div>
                    <div className={styles.hr}></div>
                    <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                    <div className={styles.cardIcon}>
                      <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} loading='lazy'/>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={handleMoveRight} className={`${styles.btnRight} ${rightBtnDisable ? styles.disable : ''}`}></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activity;