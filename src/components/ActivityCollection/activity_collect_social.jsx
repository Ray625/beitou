import styles from './activity_collect_social.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';

const prizeList = [{
  id: 1,
  img: '/prize/prize_FB_1.png',
  titleKey: 'collectSocial.prize.title1',
  subtitleKey: 'collectSocial.prize.subtitle1',
  noteKey: 'collectSocial.prize.note1',
}, {
  id: 2,
  img: '/prize/prize_FB_2.png',
  titleKey: 'collectSocial.prize.title2',
  subtitleKey: 'collectSocial.prize.subtitle2',
  noteKey: 'collectSocial.prize.note2',
  }, {
  id: 3,
  img: '/prize/prize_FB_3.png',
  titleKey: 'collectSocial.prize.title3',
  subtitleKey: 'collectSocial.prize.subtitle3',
  noteKey: 'collectSocial.prize.note3'
  }, {
  id: 4,
  img: '/prize/prize_FB_4.png',
  titleKey: 'collectSocial.prize.title4',
  subtitleKey: 'collectSocial.prize.subtitle4',
  noteKey: 'collectSocial.prize.note4'
  }, {
  id: 5,
  img: '/prize/prize_FB_5.png',
  titleKey: 'collectSocial.prize.title5',
  subtitleKey: 'collectSocial.prize.subtitle5',
  noteKey: 'collectSocial.prize.note5'
  }, {
  id: 6,
  img: '/prize/prize_FB_6.png',
  titleKey: 'collectSocial.prize.title6',
  subtitleKey: 'collectSocial.prize.subtitle6',
  noteKey: 'collectSocial.prize.note6'
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
        {parse(t(noteKey))}
      </div>
    </div>
  )
}

const CollectSocail = () => {
  const { t } = useTranslation()

  const handleClick = () => {
    window.open('https://www.facebook.com/share/p/XGNxLApkaKkJV1gm/', '_blank')
  }

  return (
    <Container className={styles.container}>
      <Wrapper className={styles.wrapper}>
        <TitleGroup
          title={t("collectSocial.title")}
          imgLeft='/svg/icon_thumb.svg'
          imgRight='/svg/icon_thumb.svg'
        />
        <Describe
          describe={t('collectSocial.describe')}
        />
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.id} />)}
        </div>
        <div className={styles.point}>{t('collectSocial.point')}</div>
        <LinkBtn
          title={t('collectSocial.linkBtn')}
          color='#6E2148'
          onClick={handleClick}
          />
      </Wrapper>
    </Container>
  )
}

export default CollectSocail;