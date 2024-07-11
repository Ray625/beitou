import styles from './activity_store_lottery.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const prizeList = [{
  id: 1,
  img: '/prize/prize_store_1.png',
  titleKey: 'storeLottery.prize.title1',
  subtitleKey: 'storeLottery.prize.subtitle1',
  noteKey: 'storeLottery.prize.note1'
}, {
  id: 2,
  img: '/prize/prize_store_2.png',
  titleKey: 'storeLottery.prize.title2',
  subtitleKey: 'storeLottery.prize.subtitle2',
  noteKey: 'storeLottery.prize.note2',
  }, {
  id: 3,
  img: '/prize/prize_store_3.png',
  titleKey: 'storeLottery.prize.title3',
  subtitleKey: 'storeLottery.prize.subtitle3',
  noteKey: 'storeLottery.prize.note3',
  }, {
  id: 4,
  img: '/prize/prize_store_4.png',
  titleKey: 'storeLottery.prize.title4',
  subtitleKey: 'storeLottery.prize.subtitle4',
  noteKey: 'storeLottery.prize.note4',
  }, {
  id: 5,
  img: '/prize/prize_store_5.png',
  titleKey: 'storeLottery.prize.title5',
  subtitleKey: 'storeLottery.prize.subtitle5',
  noteKey: 'storeLottery.prize.note5',
  }, {
  id: 6,
  img: '/prize/prize_store_6.png',
  titleKey: 'storeLottery.prize.title6',
  subtitleKey: 'storeLottery.prize.subtitle6',
  noteKey: 'storeLottery.prize.note6'
},{
  id: 7,
  img: '/prize/prize_store_7.png',
  titleKey: 'storeLottery.prize.title7',
  subtitleKey: 'storeLottery.prize.subtitle7',
  noteKey: 'storeLottery.prize.note7'
}, {
  id: 8,
  img: '/prize/prize_store_8.png',
  titleKey: 'storeLottery.prize.title8',
  subtitleKey: 'storeLottery.prize.subtitle8',
  noteKey: 'storeLottery.prize.note8'
  }, {
  id: 9,
  img: '/prize/prize_store_9.png',
  titleKey: 'storeLottery.prize.title9',
  subtitleKey: 'storeLottery.prize.subtitle9',
  noteKey: 'storeLottery.prize.note9',
  }, {
  id: 10,
  img: '/prize/prize_store_10.png',
  titleKey: 'storeLottery.prize.title10',
  subtitleKey: 'storeLottery.prize.subtitle10',
  noteKey: 'storeLottery.prize.note10',
  }, {
  id: 11,
  img: '/prize/prize_store_11.png',
  titleKey: 'storeLottery.prize.title11',
  subtitleKey: 'storeLottery.prize.subtitle11',
  noteKey: 'storeLottery.prize.note11',
  }, {
  id: 12,
  img: '/prize/prize_store_12.png',
  titleKey: 'storeLottery.prize.title12',
  subtitleKey: 'storeLottery.prize.subtitle12',
  noteKey: 'storeLottery.prize.note12',
}, {
  id: 13,
  img: '/prize/prize_store_13.png',
  titleKey: 'storeLottery.prize.title13',
  subtitleKey: 'storeLottery.prize.subtitle13',
  noteKey: 'storeLottery.prize.note13',
  }, {
  id: 14,
  img: '/prize/prize_store_14.png',
  titleKey: 'storeLottery.prize.title14',
  subtitleKey: 'storeLottery.prize.subtitle14',
  noteKey: 'storeLottery.prize.note14'
  }, {
  id: 15,
  img: '/prize/prize_store_15.png',
  titleKey: 'storeLottery.prize.title15',
  subtitleKey: 'storeLottery.prize.subtitle15',
  noteKey: 'storeLottery.prize.note15'
}]

const Prize = ({props}) => {
  const { img, titleKey, subtitleKey, noteKey } = props
  const { t } = useTranslation()
  const location = useLocation()
  const pathname = location.pathname

  return (
    <div className={styles.prize}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={t(titleKey)} className={styles.prizeImg} />
      </div>
      <div className={`${styles.title} ${pathname === '/en' && styles.linehight28}`}>{t(titleKey)}</div>
      <div className={`${styles.subtitle} ${pathname === '/en' && styles.linehight28}`}>{t(subtitleKey)}</div>
      <div className={styles.note}>
        {parse(t(noteKey))}
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
        <Describe describe={parse(t('storeLottery.describe'))}
        />
        <div className={styles.point}>{parse(t('storeLottery.point'))}
        </div>
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.id} />)}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Lottery;