import styles from '../styles/activity_apply.module.scss';
import { ImgTitle } from './titleGroup';
import { LinkBtn } from './button';

const Apply = () => {
  // 修改連結即可
  const handleClick = () => {
    window.open('https://www.netflix.com/browse', '_blank');
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
            <img src="/event/event_3.png" alt="北投小旅行" className={styles.img} />
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <object data='/svg/icon_event_day.svg' className={styles.icon}> </object>
                7/5(五)
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_event_time.svg' className={styles.icon}> </object>
                17:30 ~ 20:30
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_event_pin.svg' className={styles.icon}> </object>
                七星街
              </div>
            </div>
            <div className={styles.describe}>邀請北投在地溫泉飯店業者共襄盛舉，每位業者料理一道酒家菜美食共組一桌酒家菜料理，邀請民眾一同品嚐</div>
            <LinkBtn
              title='前往報名'
              color='#6E2148'
              onClick={()=>alert('onClick left')}
            />
          </div>
          <div className={styles.card}>
            <img src="/event/event_3.png" alt="北投小旅行" className={styles.img} />
            <div className={styles.infoGroup}>
              <div className={styles.info}>
                <object data='/svg/icon_event_day.svg' className={styles.icon}> </object>
                7/5(五)
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_event_time.svg' className={styles.icon}> </object>
                17:30 ~ 20:30
              </div>
              <div className={styles.info}>
                <object data='/svg/icon_event_pin.svg' className={styles.icon}> </object>
                七星街
              </div>
            </div>
            <div className={styles.describe}>邀請北投在地溫泉飯店業者共襄盛舉，每位業者料理一道酒家菜美食共組一桌酒家菜料理，邀請民眾一同品嚐</div>
            <LinkBtn
              title='前往報名'
              color='#6E2148'
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Apply;