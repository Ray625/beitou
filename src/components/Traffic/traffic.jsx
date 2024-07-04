import styles from './traffic.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

// 畫面用trafficList array.map()產生，最後一個自行開車的card，因內容不同就直接寫html。與設計師討論在平板上顯示時讓card都呈現一樣高度
const trafficList = [{
  id: 1,
  titleKey: 'traffic.transportation.title1',
  img: '/svg/icon_go_MRT.svg',
  describeKey: 'traffic.transportation.describe1'
}, {
  id: 2,
  titleKey: 'traffic.transportation.title2',
  img: '/svg/icon_go_bus.svg',
  describeKey: 'traffic.transportation.describe2'
  }, {
  id: 3,
  titleKey: 'traffic.transportation.title3',
  img: '/svg/icon_go_taxi.svg',
  describeKey: 'traffic.transportation.describe3'
}]

const TrafficCard = ({ props }) => {
  const { img, titleKey, describeKey } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.traffic}>
      <div className={styles.titleGroup}>
        <img src={img} alt="icon" className={styles.titleIcon} loading='lazy'/>
        <div className={styles.title}>{t(titleKey)}</div>
      </div>
      <p className={`${styles.trafficBody} ${pathname === '/en' && styles.textAlignEn}`}>{t(describeKey)}</p>
    </div>
  )
}

const Traffic = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  const handleClick = () => {
    window.open('https://maps.app.goo.gl/4itsuXSkKhw5pRnr8', '_blank');
  }

  return (
    <Container className={styles.container}>
      <div className={styles.cloud}></div>
      <div className={styles.bg}></div>
      <Wrapper className={styles.wrapper}>
        <ImgTitle
          title={t('traffic.title')}
          img='/title/title_6.png'
          id='traffic'
        />
        <Describe describe={t('traffic.describe')}/>
        <div className={styles.trafficGroup}>
          {trafficList.map(traffic => <TrafficCard props={traffic} key={traffic.id} />)}
          <div className={styles.traffic}>
            <div className={styles.titleGroup}>
              <img src='/svg/icon_go_car.svg' alt="icon" className={styles.titleIcon} loading='lazy'/>
              <div className={styles.title}>{t('traffic.transportation.title4')}</div>
            </div>
            <div className={`${styles.trafficBody} ${pathname === '/en' && styles.textAlignEn}`}>
              <ul>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/eFH3dh7A8zoztT1M8" target='_blank' rel='noopener noreferrer' className={styles.link}>{t('traffic.transportation.park1')}</a>
                  <div className={styles.point}>{t('traffic.transportation.point1')}</div>
                </li>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/if2rZD4SShjN5DLj6" target='_blank' rel='noopener noreferrer' className={styles.link}>{t('traffic.transportation.park2')}</a>
                  <div className={styles.point}>{t('traffic.transportation.point2')}</div>
                </li>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/bzTBeZvhkh86wSfTA" target='_blank' rel='noopener noreferrer' className={styles.link}>{t('traffic.transportation.park3')}</a>
                  <div className={styles.point}>{t('traffic.transportation.point3')}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LinkBtn
          title='Google Map'
          color='#6E2148'
          onClick={handleClick}
          />
      </Wrapper>
      <div className={styles.footer}></div>
    </Container>
  )
}

export default Traffic;