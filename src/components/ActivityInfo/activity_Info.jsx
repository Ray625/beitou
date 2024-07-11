import styles from './activity_info.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';

// 畫面下方5個圖片用eventList array.map()產生，透過num設定點擊後跳轉至main section，並改變上方tab，由父層的state控制顯示的tab(第1、2、3、4、5個)，並且設定連結a href="#id"，使畫面跳轉至main section
const eventList = [{
    num: 1,
    textKey: 'info.eventName1',
    bgMKey: 'info.eventImg1',
    bgKey: 'info.eventImg1'
  }, {
    num: 2,
    textKey: 'info.eventName2',
    bgMKey: 'info.eventImg2m',
    bgKey: 'info.eventImg2'
  }, {
    num: 3,
    textKey: 'info.eventName3',
    bgMKey: 'info.eventImg3m',
    bgKey: 'info.eventImg3'
  }, {
    num: 4,
    textKey: 'info.eventName4',
    bgMKey: 'info.eventImg4m',
    bgKey: 'info.eventImg4'
  }, {
    num: 5,
    textKey: 'info.eventName5',
    bgMKey: 'info.eventImg5m',
    bgKey: 'info.eventImg5'
  }]

// props接受父層傳入的setActivity，藉此改變父層state
const Info = ({ setActivity }) => {
  const { t } = useTranslation()
  const device = useDevice()

  const handleClick = (num) => {
    setActivity(num)
  }

  return (
    <Container className={styles.container}>
      <Wrapper>
        <ImgTitle
          title={t('info.title')}
          img={t('info.titleImg')}
          id='info'
        />
        <Describe
          describe={t('info.description')}
          className={styles.describe}
        />
        <div className={styles.infoGroup}>
          <div className={styles.time}>
            <img src="/svg/icon_info_time.svg" alt="icon" className={styles.icon} />
            {t('info.time')}
          </div>
          <div className={styles.location}>
            <img src="/svg/icon_info_pin.svg" alt="icon" className={styles.icon} />
            {t('info.location')}
          </div>
        </div>
        <div className={styles.eventInfo}>
          {eventList.map(item => {
            return (
              <a href='#activity' className={styles.info} onClick={() => handleClick(item.num)} style={{backgroundImage:(t(device === deviceParams.mobile ? item.bgMKey : item.bgKey))}} key={item.num}>{t(item.textKey)}</a>
            )
          })}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Info;