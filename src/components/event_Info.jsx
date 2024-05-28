import styles from '../styles/event_info.module.scss';

const Info = () => {
  return (
    <section className={styles.container} id='info'>
      <div className={styles.wrapper}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>活動資訊</h2>
        </div>
        <div className={styles.describe}>2024北投夏日魔法節以酒家菜與那卡西為活動主軸，我們計劃以「復刻北投百年歷史酒家菜，高朋滿座同歡唱」作為活動大亮點，吸引遊客夏日遊北投品嚐美食與旅遊，冬季來北投泡湯，吸引遊客們在不同季節造訪北投！</div>
        <div className={styles.infoGroup}>
          <div className={styles.time}>
            <object data="/svg/icon_info_time.svg" aria-label="time" className={styles.icon}> </object>
            時間 : 7/5(五) ~ 7/28(日)
          </div>
          <div className={styles.location}>
            <object data="/svg/icon_info_pin.svg" aria-label="location" className={styles.icon}> </object>
            地點 : 北投公園＆七星公園＆地熱谷
          </div>
        </div>
        <div className={styles.eventInfo}>
          <img src="/highlight/image_fivehighlight.png" alt="events" className={styles.infoImage} />
        </div>
      </div>
    </section>
  )
}

export default Info;