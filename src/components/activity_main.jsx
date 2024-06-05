import styles from '../styles/activity_main.module.scss';
import { useState } from 'react';
import { ImgTitle } from './titleGroup';
import useRWD from '../hooks/useRWD';

const Activity = ({ activity, setActivity }) => {
  const device = useRWD()


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
            <div className={`${styles.tab} ${styles.hover1} ${activity === 1 ? styles.activity1 : ''}`} onClick={()=>setActivity(1)}>北投酒家菜・宴席活動</div>
            <div className={`${styles.tab} ${styles.hover2} ${activity === 2 ? styles.activity2 : ''}`} onClick={()=>setActivity(2)}>復刻酒家菜・音樂同歡唱</div>
            <div className={`${styles.tab} ${styles.hover3} ${activity === 3 ? styles.activity3 : ''}`} onClick={()=>setActivity(3)}>親子冒險島</div>
            <div className={`${styles.tab} ${styles.hover4} ${activity === 4 ? styles.activity4 : ''}`} onClick={()=>setActivity(4)}>親子魔法樂園</div>
            <div className={`${styles.tab} ${styles.hover5} ${activity === 5 ? styles.activity5 : ''}`} onClick={()=>setActivity(5)}>夏日好聲音派對</div>
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
            <div className={styles.mobileCard}>
              <div className={styles.cardList}>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    那卡西與酒家菜<br/>經典重現
                  </div>
                  <div className={styles.hr}></div>
                  <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                  <div className={styles.cardIcon}>
                    <img src="/icon/tab_2-1.png" alt="icon" className={styles.iconImg} />
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    那卡西與酒家菜<br/>經典重現
                  </div>
                  <div className={styles.hr}></div>
                  <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                  <div className={styles.cardIcon}>
                    <img src="/icon/tab_2-2.png" alt="icon" className={styles.iconImg} />
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    那卡西與酒家菜<br/>經典重現
                  </div>
                  <div className={styles.hr}></div>
                  <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                  <div className={styles.cardIcon}>
                    <img src="/icon/tab_2-3.png" alt="icon" className={styles.iconImg} />
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTitle}>
                    那卡西與酒家菜<br/>經典重現
                  </div>
                  <div className={styles.hr}></div>
                  <div className={styles.cardBody}>邀請那卡西表演歌手現場駐唱，重新北投酒家菜經典氛圍</div>
                  <div className={styles.cardIcon}>
                    <img src="/icon/tab_2-4.png" alt="icon" className={styles.iconImg} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activity;