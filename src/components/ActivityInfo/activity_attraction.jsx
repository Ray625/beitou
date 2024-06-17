import styles from './activity_attraction.module.scss';
import { TitleGroup } from '../Ui/titleGroup';

// 畫面用cardList array.map()產生，用grid做左右差距一格的效果，在小螢幕時改為flex直式排版
const cardList = [{
  num: '/number/icon_1.png',
  alt: '1',
  title: '北投公園 (噴水池)',
  img: '/attraction/image_1.png',
  subtitle: '夏日魔法～溫泉魔法師降臨',
  subtitleColor: '#109D91',
  describe: '來自七星山的魔法師在這個夏日在北投變出許多魔法，邀請大家這個夏日一起來北投遊玩',
  gridRow: '1/4'
},{
  num: '/number/icon_2.png',
  alt: '2',
  title: '新北投捷運站出口',
  img: '/attraction/image_2.png',
  subtitle: '夏日魔法～幸福溫泉',
  subtitleColor: '#3585FF',
  describe: '以木製拉門背景和水流動的層次，來演繹北投經典特色溫泉。北投溫泉充滿神奇魔法，能療癒前來民眾的身心靈',
  gridRow: '2/5'
},{
  num: '/number/icon_3.png',
  alt: '3',
  title: '七星公園 (北投車站前)',
  img: '/attraction/image_3.png',
  subtitle: '夏日魔法～幸福來鈴',
  subtitleColor: '#804495',
  describe: '以日式風鈴為設計概念，讓遊客通過廊道驅除厄運、聽著風鈴聲感受幸福的到來，左右兩側可以掛上繪馬祈福',
  gridRow: '5/9'

},{
  num: '/number/icon_4.png',
  alt: '4',
  title: '北投公園 (荷花池)',
  img: '/attraction/image_4.png',
  subtitle: '夏日魔法～團團圓圓',
  subtitleColor: '#FF7628',
  describe: '以日式油傘作為設計，油傘代表團圓圓滿意涵。白天有油傘成牆的美感，夜晚透過背投光表現更吸睛',
  gridRow: '6/10'
  }, {
    num: '/number/icon_5.png',
    alt: '5',
  title: `北投公園 (圖書館對面)`,
  img: '/attraction/image_5.png',
  subtitle: '夏日魔法～煽來好幸運',
  subtitleColor: '#E9545D',
  describe: '團扇象徵招來好運。有為合作店家招來好運的隱含寓意，中間扇子可以轉動，以製造互動性',
  gridRow: '9/13'

}
]

const Card = ({ props }) => {
  const { gridRow, num, alt, title, img, subtitle, subtitleColor, describe } = props 

  return (
    <div className={styles.attractionCard} style={{gridRow}}>
      <img src={num} alt={alt} className={styles.num} loading='lazy'/>
      <div className={styles.titleGroup}>
        <img src="/svg/icon_attraction_pin.svg" alt="icon" className={styles.icon}  loading='lazy'/>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <img src={img} alt={title} className={styles.cardImg} loading='lazy'/>
        <div className={styles.subtitle} style={{ color: subtitleColor }}>{subtitle}</div>
        <p className={styles.describe}>{describe}</p>
      </div>
    </div>
  )  
}

const Attraction = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <TitleGroup
          imgLeft='svg/icon_camera.svg'
          imgRight='svg/icon_camera.svg'
          title='五大打卡景點'
        />
        <div className={styles.attractionGroup}>
          {cardList.map(card => {
            return <Card props={card} key={card.alt}/>
          })}
        </div>
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default Attraction;