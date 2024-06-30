import styles from './activity_store_lottery.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const prizeList = [{
  img: '/prize/prize_store_1.png',
  titleKey: 'storeLottery.prize.title1',
  subtitleKey: 'storeLottery.prize.subtitle1',
  noteKey: 'storeLottery.prize.note1'
},{
  img: '/prize/prize_store_2.png',
  titleKey: 'storeLottery.prize.title2',
  subtitleKey: 'storeLottery.prize.subtitle2',
  noteKey: 'storeLottery.prize.note2'
},{
  img: '/prize/prize_store_3.png',
  titleKey: 'storeLottery.prize.title3',
  subtitleKey: 'storeLottery.prize.subtitle3',
  noteKey: 'storeLottery.prize.note3'
},{
  img: '/prize/prize_store_4.png',
  titleKey: 'storeLottery.prize.title4',
  subtitleKey: 'storeLottery.prize.subtitle4',
  noteKey: 'storeLottery.prize.note4'
},{
  img: '/prize/prize_store_5.png',
  titleKey: 'storeLottery.prize.title5',
  subtitleKey: 'storeLottery.prize.subtitle5',
  noteKey: 'storeLottery.prize.note5'
},{
  img: '/prize/prize_store_6.png',
  titleKey: 'storeLottery.prize.title6',
  subtitleKey: 'storeLottery.prize.subtitle6',
  noteKey: 'storeLottery.prize.note6'
}]

const Prize = ({props}) => {
  const { img, titleKey, subtitleKey, noteKey } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.prize}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={t(titleKey)} className={styles.prizeImg} loading='lazy'/>
      </div>
      <div className={`${styles.title} ${pathname === '/en' && styles.linehight28}`}>{t(titleKey)}</div>
      <div className={`${styles.subtitle} ${pathname === '/en' && styles.linehight28}`}>{t(subtitleKey)}</div>
      <div className={styles.note}>
        {t(noteKey)}
      </div>
    </div>
  )
}

const Lottery = () => {
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper className={styles.wrapper}>
        <TitleGroup
          title={t("storeLottery.title")}
          imgLeft='/svg/icon_celebrate_left.svg'
          imgRight='/svg/icon_celebrate_right.svg'
        />
        <Describe describe={t('storeLottery.describe')}
        describe2={t('storeLottery.describe2')}
        />
        <div className={styles.point}>{t('storeLottery.point')}<br/>
          {t('storeLottery.point1')}<br />
          {t('storeLottery.point2')}<br />
          {t('storeLottery.point3')}
        </div>
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.title} />)}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Lottery;