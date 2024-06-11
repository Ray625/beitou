import styles from './traffic.module.scss';
import { ImgTitle } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';

// 畫面用trafficList array.map()產生，最後一個自行開車的card，因內容不同就直接寫html。與設計師討論在平板上顯示時讓card都呈現一樣高度
const trafficList = [{
  title: '捷運',
  img: '/svg/icon_go_MRT.svg',
  describe: '捷運可搭乘淡水信義線至北投站下車，轉搭新北投支線至新北投站下車'
},{
  title: '公車',
  img: '/svg/icon_go_bus.svg',
  describe: '公車可搭乘216、218區、218直達車、223、266、602、小6、小7南軟通勤北投線 等公車至新北投站、北投公園下車'
},{
  title: '計程車',
  img: '/svg/icon_go_taxi.svg',
  describe: '往北投方向至大業路底'
}]

const TrafficCard = ({ props }) => {
  const { img, title, describe } = props

  return (
    <div className={styles.traffic}>
      <div className={styles.titleGroup}>
        <object data={img} className={styles.titleIcon}> </object>
        <div className={styles.title}>{title}</div>
      </div>
      <p className={styles.trafficBody}>{describe}</p>
    </div>
  )
}

const Traffic = () => {
  const handleClick = () => {
    window.open('https://maps.app.goo.gl/4itsuXSkKhw5pRnr8', '_blank');
  }

  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='交通指引'
          img='/title/title_6.png'
          id='traffic'
        />
        <div className={styles.describe}>活動期間於特約店家消費滿500元以上(可累計)，憑消費收據或發票即可於活動服務處領取抽獎券，登記獲得抽限量贈品機會！</div>
        <div className={styles.trafficGroup}>
          {trafficList.map(traffic => <TrafficCard props={traffic} key={traffic.title} />)}
          <div className={styles.traffic}>
            <div className={styles.titleGroup}>
              <object data='/svg/icon_go_car.svg' className={styles.titleIcon}> </object>
              <div className={styles.title}>自行開車</div>
            </div>
            <div className={styles.trafficBody}>
              <ul>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/eFH3dh7A8zoztT1M8" className={styles.link}>捷運新北投站停車場</a>
                  <div className={styles.point}>車位數 25</div>
                </li>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/if2rZD4SShjN5DLj6" className={styles.link}>大業立體停車場</a>
                  <div className={styles.point}>車位數 124</div>
                </li>
                <li className={styles.trafficItem}>
                  <a href="https://maps.app.goo.gl/bzTBeZvhkh86wSfTA" className={styles.link}>七星公園地下停車場</a>
                  <div className={styles.point}>車位數 328</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <LinkBtn
          title='Google Map'
          color='#6E2148'
          onClick={handleClick}
        />
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default Traffic;