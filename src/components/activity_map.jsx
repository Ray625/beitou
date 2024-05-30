import styles from '../styles/activity_map.module.scss';
import TitleGroup from './titleGroup';

const Map = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleGroup
          imgLeft='/svg/icon_map.svg'
          imgRight='/svg/icon_map.svg'
          title='活動地圖'
        />
        <div className={styles.map}>
          地圖
        </div>
        <TitleGroup
          imgLeft='/svg/icon_calendar.svg'
          imgRight='/svg/icon_calendar.svg'
          title='活動行事曆'
        />
        <div className={styles.calendar}>
          行事曆
        </div>
      </div>
    </section>
  )
}

export default Map;
