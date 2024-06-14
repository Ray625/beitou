import styles from './activity_store_lottery.module.scss';
import { TitleGroup } from '../Ui/titleGroup';

// 獎項內容還沒確定，做了排版
const Lottery = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <TitleGroup
          title='消費滿額抽'
          imgLeft='/svg/icon_celebrate_left.svg'
          imgRight='/svg/icon_celebrate_right.svg'
        />
        <div className={styles.describe}>活動期間於特約店家消費滿500元以上(可累計)，憑消費收據或發票即可於活動服務處領取抽獎券，登記獲得抽限量贈品機會！</div>
        <div className={styles.awardsGroup}>
          <div className={styles.award}>
            <img src="/prize/prize_4.png" alt="首獎" className={styles.awardImg} loading='lazy'/>
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Iphone 15 Pro</div>
            <div className={styles.subtitle}>128GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$44,900</div>
          </div>
          <div className={styles.award}>
            <img src="/prize/prize_4.png" alt="首獎" className={styles.awardImg} loading='lazy'/>
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Iphone 15 Pro</div>
            <div className={styles.subtitle}>128GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$44,900</div>
          </div>
          <div className={styles.award}>
            <img src="/prize/prize_4.png" alt="首獎" className={styles.awardImg} loading='lazy'/>
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Iphone 15 Pro</div>
            <div className={styles.subtitle}>128GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$44,900</div>
          </div>
          <div className={styles.award}>
            <img src="/prize/prize_4.png" alt="首獎" className={styles.awardImg} loading='lazy'/>
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Iphone 15 Pro</div>
            <div className={styles.subtitle}>128GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$44,900</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Lottery;