import styles from '../styles/event_map.module.scss';
import TitleGroup from './titleGroup';

const Map = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleGroup
          img='/svg/icon_map.svg'
          title='活動地圖'
          ariaLabel='map'
        />
        <div className={styles.map}>
          地圖
        </div>
        <TitleGroup
          img='/svg/icon_calendar.svg'
          title='活動行事曆'
          ariaLabel='calendar'
        />
        <div className={styles.calendar}>
          行事曆
        </div>
      </div>
    </section>
  )
}

export default Map;
