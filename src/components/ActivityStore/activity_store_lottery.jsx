import styles from './activity_store_lottery.module.scss';
import { TitleGroup } from '../Ui/titleGroup';

const prizeList = [{
  img: '/prize/prize_store_1.png',
  title: 'iPhone 15 Pro',
  subtitle: '128GB',
  note: '乙台・1名・市價 NT$36,900'
},{
  img: '/prize/prize_store_2.png',
  title: '北投水美溫泉會館',
  subtitle: '雅風雙床房住宿券',
  note: '乙張・5名・市價 NT$11,000'
},{
  img: '/prize/prize_store_3.png',
  title: '享溫泉',
  subtitle: '大眾風呂泡湯券',
  note: '乙張・20名・市價 NT$1,300',
},{
  img: '/prize/prize_store_4.png',
  title: '水都溫泉會館',
  subtitle: '露天大眾池泡湯券',
  note: '乙張・5名・市價 NT$800',
},{
  img: '/prize/prize_store_5.png',
  title: '泉都溫泉會館',
  subtitle: '住宿抵用券500元',
  note: '乙張・5名・市價 NT$500',
},{
  img: '/prize/prize_store_6.png',
  title: '北投溫泉博物館',
  subtitle: '泡湯小童碗',
  note: '乙個・15名・市價 NT$350',
}]

const Prize = ({props}) => {
  const {img, title, subtitle, note, note2} = props

  return (
    <div className={styles.prize}>
      <img src={img} alt={title} className={styles.prizeImg} loading='lazy'/>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.note}>
        {note}
        {note2 && <><br />{note2}</>}
      </div>
    </div>
  )
}

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
        <div className={styles.describe}>於2024/7/5-2024/7/28期間，至特約商店當日單筆消費滿NT$300(無法跨店兌換)即可獲得抽獎券乙張，消費滿NT$600即可獲得抽獎券兩張，以此類推。
          <br />
          <br />
          消費者將抽獎券投入特約商店的活動抽獎箱中，即可參與消費滿額抽活動。
        </div>
        <div className={styles.point}>※注意事項<br/>
          1. 抽獎券請填寫真實姓名與本人手機，如聯繫不到得獎人，主辦單位概不負責<br />
          2. 使用溫泉或住宿等票卷之消費不適用消費滿額抽之活動。<br />
        </div>
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.title} />)}
        </div>
      </div>
    </section>
  )
}

export default Lottery;