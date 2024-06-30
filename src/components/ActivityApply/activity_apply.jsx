import styles from './activity_apply.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';

// 活動內容還沒確定，先做了版型及設定外部連結
const Apply = () => {
  const handleClickLeft = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScHfO-4_q_OtpgaUQdcjVSL8OUIuKP1Y0AjiDrOZDeiwK11aQ/viewform', '_blank');
  }

  const handleClickRight = () => {
    window.open('https://forms.gle/XZD7x8LJ3w2XEDWEA', '_blank');
  }

  return (
    <section className={styles.container} >
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='活動報名'
          img='/title/title_3.png'
          id='apply'
        />
        <div className={styles.cardGroup}>
          <div className={styles.card}>
            <img src="/event/event_3.png" alt="北投小旅行" className={styles.img} loading='lazy'/>
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <img src="/svg/icon_event_day.svg" alt="icon" className={styles.icon} loading='lazy'/>
                7/7(日)~7/21(日)
              </div>
              <div className={styles.info}>
                <img src="/svg/icon_event_time.svg" alt="icon" className={styles.icon} loading='lazy'/>
                15:00-18:30
              </div>
              <div className={styles.info}>
                <img src="/svg/icon_event_pin.svg" alt="icon" className={styles.icon} loading='lazy'/>
                七星公園服務台
              </div>
            </div>
            <div className={styles.describe}>2024「北投夏日魔法節」邀請您遠離城市，來一趟紓壓小旅行，深入了解百年歷史的北投。透過專業導覽，探索當地文化、歷史、自然和美食，重新認識這片充滿魅力的溫泉鄉</div>
            <LinkBtn
              title='前往報名'
              color='#6E2148'
              onClick={handleClickLeft}
            />
          </div>
          <div className={styles.card}>
            <img src="/event/event_4.png" alt="夏日好聲音歌唱比賽" className={styles.img} loading='lazy'/>
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <img src="/svg/icon_event_day.svg" alt="icon" className={styles.icon} loading='lazy'/>
                7/27(六)~7/28(日)
              </div>
              <div className={styles.info}>
                <img src="/svg/icon_event_time.svg" alt="icon" className={styles.icon} loading='lazy'/>
                17:30-20:30
              </div>
              <div className={styles.info}>
                <img src="/svg/icon_event_pin.svg" alt="icon" className={styles.icon} loading='lazy'/>
                七星公園舞台區
              </div>
            </div>
            <div className={styles.describe}>2024「北投夏日魔法節」將結合在地組織，復刻北投那卡西文化，舉辦「再現那卡西 北投好聲音」歌唱大賽，邀請愛唱那卡西歌曲的朋友參加，共同唱出台灣風味的故鄉歌謠，並鼓勵民眾踴躍參與，享受戶外活動</div>
            <LinkBtn
              title='前往報名'
              color='#6E2148'
              onClick={handleClickRight}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apply;