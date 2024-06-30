import styles from './activity_collect.module.scss';
import { ImgTitle, TitleGroup } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const prizeList = [{
  img: '/prize/prize_LINE_1.png',
  titleKey: 'collect.prize.title1',
  subtitleKey: 'collect.prize.subtitle1',
  noteKey: 'collect.prize.note1'
},{
  img: '/prize/prize_LINE_2.png',
  titleKey: 'collect.prize.title2',
  subtitleKey: 'collect.prize.subtitle2',
  noteKey: 'collect.prize.note2'
},{
  img: '/prize/prize_LINE_3.png',
  titleKey: 'collect.prize.title3',
  subtitleKey: 'collect.prize.subtitle3',
  noteKey: 'collect.prize.note3',
  note2Key: 'collect.prize.note2nd'
},{
  img: '/prize/prize_LINE_4.png',
  titleKey: 'collect.prize.title4',
  subtitleKey: 'collect.prize.subtitle4',
  noteKey: 'collect.prize.note4'
},]

const Prize = ({props}) => {
  const { img, titleKey, subtitleKey, noteKey, note2Key } = props
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
      </div>
    </div>
  )
}

const Collect = () => {
  const { t } = useTranslation()

  const handleClick = () => {
    window.open('https://line.me/R/ti/p/@309wtsim?from=page&accountId=309wtsim', '_blank')
  }

  return (
    <Container className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <ImgTitle
          title={t('collect.title')}
          img='/title/title_4.png'
          id='collect'
          />
        <TitleGroup
          title={t('collect.subtitle')}
          imgLeft='/svg/icon_photo.svg'
          imgRight='/svg/icon_photo.svg'
          />
        <Describe
          describe={t('collect.describe')}
        />
        <div className={styles.point}>{t("collect.point")}</div>
        <div className={styles.rule}>
          <img src={t('collect.img')} alt={t("collect.alt")} className={styles.img} loading='lazy'/>
        </div>
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.title} />)}
        </div>
        <LinkBtn
          title={t("collect.linkBtn")}
          color='#FF7628'
          onClick={handleClick}
          />
      </Wrapper>
    </Container>
  )
}

export default Collect;