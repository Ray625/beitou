import styles from './activity_map.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';
import { useRef } from 'react';
import { Container, Wrapper } from '../Ui/container';
// 點擊圖片放大的功能寫在Ui/zoomInImg中
import ZoomInImg from '../Ui/zoomInImg';

const Map = () => {
  const containerRef = useRef(null)
  const device = useDevice()

  // 因為想要製作點及地圖可以放大的功能，要讓section的z-index大過header，才不會被header蓋住，故此用ref儲存container節點，並透過點擊時改變其z-index
   const changeZindex = (num) => {
    if (containerRef.current) {
      containerRef.current.changeZindex(num);
    }
  }

  return (
    <Container className={styles.container} ref={containerRef}>
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}

export default Map;
