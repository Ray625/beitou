import styles from '../styles/footer.module.scss';
import { ImgTitle } from './titleGroup';

const Footer = () => {
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
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftcooc%3Flocale%3Dzh_TW&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151" width="340px" height="130px" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <a href="https://user234859.pse.is/5xzay2" target="_blank" rel="noopener noreferrer" className={styles.fbName}>台北市商業處-我是商Ya人</a>
          </div>
          <div className={styles.link}>
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftaipeihotsprings&tabs=timeline&width=340px&height=130px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=778287867140151" width="340px" height="130px" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <a href="https://user234859.pse.is/5xzb5f" target="_blank" rel="noopener noreferrer" className={styles.fbName}>新北投溫泉<br/>Xinbeitou Hot Springs</a>
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default Footer;