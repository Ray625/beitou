import styles from './activity_collect.module.scss';
import { ImgTitle, TitleGroup } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';

const prizeList = [{
  img: '/prize/prize_LINE_1.png',
  title: 'Samsung',
  subtitle: 'Galaxy S24 256GB',
  note: '乙台・1名・市價 NT$27,900'
},{
  img: '/prize/prize_LINE_2.png',
  title: '水都溫泉會館',
  subtitle: '露天大眾池泡湯券',
  note: '乙張・5名・市價 NT$800'
},{
  img: '/prize/prize_LINE_3.png',
  title: '北投水美溫泉會館',
  subtitle: '迎賓小菜',
  note: '乙份・100名・市價 NT$200',
  note2: '(至餐飲部用餐消費即贈送)'
},{
  img: '/prize/prize_LINE_4.png',
  title: '北投夏日魔法節',
  subtitle: '環保提袋',
  note: '乙個・432名',
},]

const Prize = ({props}) => {
  const {img, title, subtitle, note, note2} = props

  return (
    <div className={styles.prize}>
      <div className={styles.imgWrapper}>
        <img src={img} alt={title} className={styles.prizeImg} loading='lazy'/>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      <div className={styles.note}>
        {note}
        {note2 && <><br />{note2}</>}
      </div>
    </div>
  )
}

const Collect = () => {
  const handleClick = () => {
    window.open('https://line.me/R/ti/p/@309wtsim?from=page&accountId=309wtsim', '_blank')
  }

  return (
    <section className={styles.container} >
      <div className={styles.wrapper}>
        <ImgTitle
          title='集章之旅'
          img='/title/title_4.png'
          id='collect'
        />
        <TitleGroup
          title='五大打卡景點'
          imgLeft='/svg/icon_photo.svg'
          imgRight='/svg/icon_photo.svg'
        />
        <div className={styles.describe}>活動期間，參加「2024北投夏日魔法節」，在五大裝置藝術打卡景點現場掃描QR Code，加入「2024北投夏日魔法節LINE官方帳號」，開始集章之旅，集滿3點可獲得一次扭蛋抽獎機會，集滿5點可再玩一次扭蛋抽獎！</div>
        <div className={styles.point}>數量有限，抽完為止</div>
        <div className={styles.rule}>
          <img src="/event/image_step.png" alt="集章規則" className={styles.img} loading='lazy'/>
        </div>
        <div className={styles.prizeGroup}>
          {prizeList.map(prize => <Prize props={prize} key={prize.title} />)}
        </div>
        <LinkBtn
          title='開啟集章卡'
          color='#FF7628'
          onClick={handleClick}
        />
      </div>
    </section>
  )
}

export default Collect;