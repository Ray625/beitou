import styles from './activity_map.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';
import { useRef } from 'react';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';
import ZoomInImg from '../Ui/zoomInImg';

const Map = () => {
  const containerRef = useRef(null)
  const device = useDevice()
  const { t } = useTranslation()

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
          title={t('map.mapTitle')}
        />
        <div className={styles.map} >
          {device !== deviceParams.mobile && <ZoomInImg
            src={t('map.mapImg')}
            alt={t('map.mapAlt')}
            changeZindex={changeZindex}
          />}
          {device === deviceParams.mobile && <ZoomInImg
            src={t('map.mapImgM')}
            alt={t('map.mapAlt')}
            changeZindex={changeZindex}
          />}
        </div>
        <TitleGroup
          imgLeft='/svg/icon_calendar.svg'
          imgRight='/svg/icon_calendar.svg'
          title={t('map.scheduleTitle')}
        />
        <div className={styles.schedule}>
          <ZoomInImg
            src={t('map.scheduleImg')}
            alt={t('map.scheduleAlt')}
            changeZindex={changeZindex}
          />
        </div>
      </Wrapper>
    </Container>
  )
}

export default Map;
