import styles from './activity_store_lottery.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

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
  note2Key: 'storeLottery.prize.note2nd2',
  note3Key: 'storeLottery.prize.note3rd2'
  }, {
  id: 3,
  img: '/prize/prize_store_3.png',
  titleKey: 'storeLottery.prize.title3',
  subtitleKey: 'storeLottery.prize.subtitle3',
  noteKey: 'storeLottery.prize.note3',
  note2Key: 'storeLottery.prize.note2nd3'
  }, {
  id: 4,
  img: '/prize/prize_store_4.png',
  titleKey: 'storeLottery.prize.title4',
  subtitleKey: 'storeLottery.prize.subtitle4',
  noteKey: 'storeLottery.prize.note4',
  note2Key: 'storeLottery.prize.note2nd4'
  }, {
  id: 5,
  img: '/prize/prize_store_5.png',
  titleKey: 'storeLottery.prize.title5',
  subtitleKey: 'storeLottery.prize.subtitle5',
  noteKey: 'storeLottery.prize.note5',
  note2Key: 'storeLottery.prize.note2nd5'
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
  note2Key: 'storeLottery.prize.note2nd9'
  }, {
  id: 10,
  img: '/prize/prize_store_10.png',
  titleKey: 'storeLottery.prize.title10',
  subtitleKey: 'storeLottery.prize.subtitle10',
  noteKey: 'storeLottery.prize.note10',
  note2Key: 'storeLottery.prize.note2nd10'
  }, {
  id: 11,
  img: '/prize/prize_store_11.png',
  titleKey: 'storeLottery.prize.title11',
  subtitleKey: 'storeLottery.prize.subtitle11',
  noteKey: 'storeLottery.prize.note11',
  note2Key: 'storeLottery.prize.note2nd11',
  note3Key: 'storeLottery.prize.note3rd11'
  }, {
  id: 12,
  img: '/prize/prize_store_12.png',
  titleKey: 'storeLottery.prize.title12',
  subtitleKey: 'storeLottery.prize.subtitle12',
  noteKey: 'storeLottery.prize.note12',
  note2Key: 'storeLottery.prize.note2nd12'
}, {
  id: 13,
  img: '/prize/prize_store_13.png',
  titleKey: 'storeLottery.prize.title13',
  subtitleKey: 'storeLottery.prize.subtitle13',
  noteKey: 'storeLottery.prize.note13',
  note2Key: 'storeLottery.prize.note2nd13',
  note3Key: 'storeLottery.prize.note3rd13'

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
  const { img, titleKey, subtitleKey, noteKey, note2Key, note3Key } = props
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
        {note2Key && <><br />{t(note2Key)}</>}
        {note3Key && <><br />{t(note3Key)}</>}
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
          {prizeList.map(prize => <Prize props={prize} key={prize.id} />)}
        </div>
      </Wrapper>
    </Container>
  )
}

export default Lottery;