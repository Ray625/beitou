import styles from './QA.module.scss';
import { ImgTitle } from '../Ui/titleGroup';

// 常見問題資料要等業主整理，先排了版型
const QA = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='常見問題'
          img='/title/title_7.png'
          id='qa'
        />
        <div className={styles.qaWrapper}>
          <div className={styles.qaGroup}>
            <div className={styles.qa}>
              <div className={styles.question}>Q1.「2024北投夏日魔法節」的活動時間與地點？</div>
              <div className={styles.answer}>2024北投夏日魔法節為自7/5(五)起到7/28(日)為期一個月的活動；活動區域涵蓋捷運新北投捷運站周邊，含：新北投捷運站廣場、七星街、（七星、七虎、北投三大公園）、地熱谷。</div>
            </div>
            <div className={styles.qa}>
              <div className={styles.question}>Q1.「2024北投夏日魔法節」的活動時間與地點？</div>
              <div className={styles.answer}>2024北投夏日魔法節為自7/5(五)起到7/28(日)為期一個月的活動；活動區域涵蓋捷運新北投捷運站周邊，含：新北投捷運站廣場、七星街、（七星、七虎、北投三大公園）、地熱谷。</div>
            </div>
            <div className={styles.qa}>
              <div className={styles.question}>Q1.「2024北投夏日魔法節」的活動時間與地點？</div>
              <div className={styles.answer}>2024北投夏日魔法節為自7/5(五)起到7/28(日)為期一個月的活動；活動區域涵蓋捷運新北投捷運站周邊，含：新北投捷運站廣場、七星街、（七星、七虎、北投三大公園）、地熱谷。</div>
            </div>
            <div className={styles.qa}>
              <div className={styles.question}>Q1.「2024北投夏日魔法節」的活動時間與地點？</div>
              <div className={styles.answer}>2024北投夏日魔法節為自7/5(五)起到7/28(日)為期一個月的活動；活動區域涵蓋捷運新北投捷運站周邊，含：新北投捷運站廣場、七星街、（七星、七虎、北投三大公園）、地熱谷。</div>
            </div>
            <div className={styles.qa}>
              <div className={styles.question}>Q1.「2024北投夏日魔法節」的活動時間與地點？</div>
              <div className={styles.answer}>2024北投夏日魔法節為自7/5(五)起到7/28(日)為期一個月的活動；活動區域涵蓋捷運新北投捷運站周邊，含：新北投捷運站廣場、七星街、（七星、七虎、北投三大公園）、地熱谷。</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QA;