import styles from './activity_apply.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const cardList = [{
  id: 1,
  imgKey: 'apply.img1',
  altKey: 'apply.alt1',
  dateKey: 'apply.date1',
  timeKey: 'apply.time1',
  locationKey: 'apply.location1',
  onClick: () => {
    window.open('https://forms.gle/CMgLUtPNjMdSFHHD9', '_blank')
  }
}, {
  id: 2,
  imgKey: 'apply.img2',
  altKey: 'apply.alt2',
  dateKey: 'apply.date2',
  timeKey: 'apply.time2',
  locationKey: 'apply.location2',
  onClick: () => {
    window.open('https://forms.gle/XZD7x8LJ3w2XEDWEA', '_blank');
  }
}]

const Card = ({ props }) => {
  const { imgKey, altKey, dateKey, timeKey, locationKey, onClick } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.card}>
      <img src={t(imgKey)} alt={t(altKey)} className={styles.img} />
      <div className={pathname === '/zh' ? styles.infoGroup : styles.infoGroupEn}>
        <div className={styles.info}>
          <img src="/svg/icon_event_day.svg" alt="icon" className={styles.icon} />
          {t(dateKey)}
        </div>
        <div className={styles.info}>
          <img src="/svg/icon_event_time.svg" alt="icon" className={styles.icon} />
          {t(timeKey)}
        </div>
        <div className={styles.info}>
          <img src="/svg/icon_event_pin.svg" alt="icon" className={styles.icon} />
          {t(locationKey)}
        </div>
      </div>
      <LinkBtn
        title={t('apply.button')}
        color='#6E2148'
        onClick={onClick}
        />
    </div>
  )
}

const Apply = () => {
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper className={styles.wrapper}>
        <ImgTitle
          title={t('apply.title')}
          img='/title/title_3.png'
          id='apply'
          />
        <div className={styles.cardGroup}>
          {cardList.map(card => <Card props={card} key={card.id}/>)}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Apply;