import styles from './activity_attraction.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { useDevice } from '../../contexts/DeviceContext';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { deviceParams } from '../../utils/const';

const cardList = [{
  num: '/number/icon_1.png',
  alt: '1',
  titleKey: 'attraction.title1',
  img: '/attraction/image_1.png',
  subtitleKey: 'attraction.subtitle1',
  subtitleColor: '#109D91',
  describeKey: 'attraction.describe1'
},{
  num: '/number/icon_2.png',
  alt: '2',
  titleKey: 'attraction.title2',
  img: '/attraction/image_2.png',
  subtitleKey: 'attraction.subtitle2',
  subtitleColor: '#3585FF',
  describeKey: 'attraction.describe2'
},{
  num: '/number/icon_3.png',
  alt: '3',
  titleKey: 'attraction.title3',
  img: '/attraction/image_3.png',
  subtitleKey: 'attraction.subtitle3',
  subtitleColor: '#A15184',
  describeKey: 'attraction.describe3'
},{
  num: '/number/icon_4.png',
  alt: '4',
  titleKey: 'attraction.title4',
  img: '/attraction/image_4.png',
  subtitleKey: 'attraction.subtitle4',
  subtitleColor: '#FF7628',
  describeKey: 'attraction.describe4'
  }, {
  num: '/number/icon_5.png',
  alt: '5',
  titleKey: 'attraction.title5',
  img: '/attraction/image_5.png',
  subtitleKey: 'attraction.subtitle5',
  subtitleColor: '#E9545D',
  describeKey: 'attraction.describe5'
  }
]

const Card = ({ props }) => {
  const { num, alt, titleKey, img, subtitleKey, subtitleColor, describeKey } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.attractionCard}>
      <img src={num} alt={alt} className={styles.num} loading='lazy'/>
      <div className={(pathname === '/') ? styles.titleGroup : styles.titleGroupEn}>
        <h3 className={styles.title}>
          <img src="/svg/icon_attraction_pin.svg" alt="icon" className={styles.icon}  loading='lazy'/>
          {t(titleKey)}
        </h3>
      </div>
      <div className={styles.cardBody}>
        <img src={img} alt={t(titleKey)} className={styles.cardImg} loading='lazy'/>
        <div className={styles.subtitle} style={{ color: subtitleColor }}>{t(subtitleKey)}</div>
        <p className={(pathname === '/') ? styles.describe : styles.describeEn}>{t(describeKey)}</p>
      </div>
    </div>
  )
}

const Attraction = () => {
  const device = useDevice()
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <Wrapper>
        <TitleGroup
          imgLeft='svg/icon_camera.svg'
          imgRight='svg/icon_camera.svg'
          title={t('attraction.title')}
          />
        {device !== deviceParams.pc && <div className={styles.attractionGroup}>
          {cardList.map(card => {
            return <Card props={card} key={card.alt}/>
          })}
        </div>}
        {device === deviceParams.pc && <div className={styles.attractionGroup}>
          <div className={styles.leftCardGroup}>
            {cardList.map((card, index) => {
              if (index % 2 === 0)
              return <Card props={card} key={card.alt} />
            })}
          </div>
          <div className={styles.rightCardGroup}>
            {cardList.map((card, index) => {
              if (index % 2 === 1)
              return <Card props={card} key={card.alt} />
            })}
          </div>
        </div>}
      </Wrapper>
      <div className={styles.footer}></div>
    </Container>
  )
}

export default Attraction;