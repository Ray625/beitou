import styles from './footer.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { useDevice } from '../../contexts/DeviceContext';
import { deviceParams } from '../../utils/const';
import { Container } from '../Ui/container';
import { useTranslation } from 'react-i18next';


// 下方連結用fb粉絲專頁外掛程式嵌入，沒有特別調數值，只有在小螢幕時透過網址改變顯示的寬度
const Footer = () => {
  const device = useDevice()
  const { t } = useTranslation()

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title={t('link.title')}
          img='/title/title_8.png'
          id='link'
          />
        <div className={styles.linkGroup}>
          <div className={styles.link}>
            {(device === deviceParams.mobile || device === deviceParams.tablet) && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcooc%3Flocale%3Dzh_TW&tabs=timeline&width=300px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='台北市商業處粉絲專頁'></iframe>}
            {(device === deviceParams.laptop || device === deviceParams.pc) && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcooc%3Flocale%3Dzh_TW&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='台北市商業處粉絲專頁'></iframe>}
            <a href="https://user234859.pse.is/5xzay2" target="_blank" rel="noopener noreferrer" className={styles.fbName}>台北市商業處-我是商Ya人</a>
          </div>
          <div className={styles.link}>
            {(device === deviceParams.mobile || device === deviceParams.tablet) && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaipeihotsprings&tabs=timeline&width=300px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='新北投溫泉粉絲專頁'></iframe>}
            {(device === deviceParams.laptop || device === deviceParams.pc) && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaipeihotsprings&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='新北投溫泉粉絲專頁'></iframe>}
            <a href="https://user234859.pse.is/5xzb5f" target="_blank" rel="noopener noreferrer" className={styles.fbName}>新北投溫泉<br/>Xinbeitou Hot Springs</a>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerInfo}></div>
      </div>
      <div className={styles.mobileFooter}></div>
    </Container>
  )
}

export default Footer;