import styles from './activity_collect_social.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';

const prizeList = [{
  img: '/prize/prize_FB_1.png',
  title: '北投南豐天玥泉溫泉會館',
  subtitle: '大眾裸湯泡湯卷',
  note: '乙張・5名・市價 NT$1,000'
},{
  img: '/prize/prize_FB_2.png',
  title: '泉都溫泉會館',
  subtitle: '住宿抵用券500元',
  note: '乙張・5名・市價 NT$500'
},{
  img: '/prize/prize_FB_3.png',
  title: '雙月食品社-北投店',
  subtitle: '椒芝麵&松露麵',
  note: '各乙袋・24名・市價 NT$780',
},{
  img: '/prize/prize_FB_4.png',
  title: '北投齊雞',
  subtitle: '手作雞肉鬆',
  note: '乙瓶・10名・市價 NT$150',
},{
  img: '/prize/prize_FB_5.png',
  title: '牧牧moomoo-北投光明店',
  subtitle: '四葉十勝鮮乳一公升',
  note: '乙瓶・1名・市價 NT$220',
},{
  img: '/prize/prize_FB_6.png',
  title: '牧牧moomoo-北投光明店',
  subtitle: '北海道十勝鮮奶酪',
  note: '乙個・10名・市價 NT$40',
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

const CollectSocail = () => {
  const handleClick = () => {
    window.open('https://user234859.pse.is/5xzb5f', '_blank')
  }
  
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleGroup
          title='集章社群抽獎'
          imgLeft='/svg/icon_thumb.svg'
          imgRight='/svg/icon_thumb.svg'
        />
        <div className={styles.describe}>在 2024/7/28 前，於「2024北投夏日魔法節」LINE官方帳號內集滿5點電子戳章，並將電子戳章截圖上傳至溫泉協會粉絲團，即可參加社群抽獎，獎項包括北投旅宿業者提供的住宿和泡湯券！</div>
        <div className={styles.point}>詳情請點選下方的溫泉協會粉絲團連結</div>
        <div className={styles.prizeGroup}>
          {prizeList.map((prize, index) => <Prize props={prize} key={index} />)}
        </div>
        <LinkBtn
          title='溫泉協會粉絲團'
          color='#6E2148'
          onClick={handleClick}
        />
      </div>
    </section>
  )
}

export default CollectSocail;