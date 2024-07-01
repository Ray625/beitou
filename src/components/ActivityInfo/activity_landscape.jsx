import styles from './activity_landscape.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { useTranslation } from 'react-i18next';

// 畫面用cardList array.map()產生
const cardList = [{
  id: 1,
  titleKey: 'landscape.title1',
  locationKey: 'landscape.location1',
  img: '/attraction/image_6.png'
}, {
  id: 2,
  titleKey: 'landscape.title2',
  locationKey: 'landscape.location2',
  img: '/attraction/image_7.png'
  }, {
  id: 3,
  titleKey: 'landscape.title3',
  locationKey: 'landscape.location3',
  img: '/attraction/image_8.png'
  }, {
  id: 4,
  titleKey: 'landscape.title4',
  locationKey: 'landscape.location4',
  img: '/attraction/image_9.png'
  }]

const Card = ({ props }) => {
  const { titleKey, locationKey, img } = props
  const { t } = useTranslation()

  return (
    <div className={styles.card}>
      <img src={img} alt={location} className={styles.img} loading='lazy'/>
      <h3 className={styles.title}>{t(titleKey)}</h3>
      <div className={styles.location}>
        <img src="/svg/icon_attraction_pin.svg" alt="icon" className={styles.icon} loading='lazy'/>
        {t(locationKey)}
      </div>
    </div>
    )
  }

const Landscape = () => {
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper>
        <TitleGroup
        imgLeft='svg/icon_star_left.svg'
        title={t('landscape.title')}
        imgRight='svg/icon_star_right.svg'
        />
        <div className={styles.cardList}>
          {cardList.map(card => {
            return <Card props={card} key={card.id}/>
          })}
        </div>
      </Wrapper>
      <div className={styles.footer}></div>
    </Container>
  )
}

export default Landscape;