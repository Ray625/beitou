import styles from './footer.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import useRWD from '../../hooks/useRWD';
  
const Footer = () => {
  const device = useRWD()

  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='友善連結'
          img='/title/title_8.png'
          id='link'
        />
        <div className={styles.linkGroup}>
          <div className={styles.link}>
            {(device === 'tablet' || device === 'mobile') && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcooc%3Flocale%3Dzh_TW&tabs=timeline&width=300px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='台北市商業處粉絲專頁'></iframe>}
            {(device === 'laptop' || device === 'PC') && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcooc%3Flocale%3Dzh_TW&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='台北市商業處粉絲專頁'></iframe>}
            <a href="https://user234859.pse.is/5xzay2" target="_blank" rel="noopener noreferrer" className={styles.fbName}>台北市商業處-我是商Ya人</a>
          </div>
          <div className={styles.link}>
            {(device === 'tablet' || device === 'mobile') && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaipeihotsprings&tabs=timeline&width=300px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              className={styles.fb} title='新北投溫泉粉絲專頁'></iframe>}
            {(device === 'laptop' || device === 'PC') && <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaipeihotsprings&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151"
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
    </section>
  )
}

export default Footer;