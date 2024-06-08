import styles from '../styles/activity_map.module.scss';
import { TitleGroup } from './titleGroup';
import useRWD from '../hooks/useRWD';
import ZoomInImg from './zoomInImg';
import { useRef } from 'react';

const Map = () => {
  const containerRef = useRef(null)
  const device = useRWD()

  const changeZindex = (num) => {
    containerRef.current.style.zIndex = num
  }

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.wrapper}>
        <TitleGroup
          imgLeft='/svg/icon_map.svg'
          imgRight='/svg/icon_map.svg'
          title='活動地圖'
        />
        <div className={styles.map} >
          {device !== 'mobile' && <ZoomInImg
            src="/event/map.png"
            alt="地圖"
            changeZindex={changeZindex}
          />}
          {device === 'mobile' && <ZoomInImg
            src="/event/map_m.png"
            alt="地圖"
            changeZindex={changeZindex}
          />}
        </div>
        <TitleGroup
          imgLeft='/svg/icon_calendar.svg'
          imgRight='/svg/icon_calendar.svg'
          title='活動行事曆'
        />
        <div className={styles.schedule}>
          <ZoomInImg
            src="/event/schedule.png"
            alt="行事曆"
            changeZindex={changeZindex}
          />
        </div>
      </div>
    </section>
  )
}

export default Map;
