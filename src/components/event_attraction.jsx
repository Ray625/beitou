import styles from '../styles/event_attraction.module.scss';
import TitleGroup from './titleGroup';

const cardList = [{
  num: '/number/icon_1.png',
  alt: '1',
  title: '北投公園-噴水池',
  img: '/attraction/image_1.png',
  subtitle: '夏日魔法～溫泉魔法師降臨',
  subtitleColor: '#F4AA1C',
  describe: '來自七星山的魔法師在這個夏日在北投變出許多魔法，邀請大家這個夏日一起來北投遊玩',
  gridRow: '1/4'
},{
  num: '/number/icon_2.png',
  alt: '2',
  title: '新北投捷運站出口',
  img: '/attraction/image_2.png',
  subtitle: '夏日魔法～幸福溫泉',
  subtitleColor: '#3585FF',
  describe: '北投溫泉充滿神奇魔法，能療癒你的身心靈',
  gridRow: '2/5'
},{
  num: '/number/icon_3.png',
  alt: '3',
  title: '北投公園-荷花池',
  img: '/attraction/image_3.png',
  subtitle: '夏日魔法～團團圓圓',
  subtitleColor: '#FF7628',
  describe: '以日式油傘作為設計，油傘代表團圓圓滿意涵。白天有油傘成牆的美感，夜晚透過背投光表現更吸睛',
  gridRow: '5/9'

},{
  num: '/number/icon_4.png',
  alt: '4',
  title: '北投公園走道(北投圖書館對面)',
  img: '/attraction/image_4.png',
  subtitle: '夏日魔法～煽來好幸運',
  subtitleColor: '#E9545D',
  describe: '團扇性徵招來好運。扇子上可以印上合作商家的Logo，為合作店家招來好生意，中間扇子可以轉動',
  gridRow: '6/10'
},{
  num: '/number/icon_5.png',
  alt: '5',
  title: '七星公園-北投車站前',
  img: '/attraction/image_5.png',
  subtitle: '夏日魔法～幸福來鈴',
  subtitleColor: '#804495',
  describe: '以日式風鈴為設計概念，讓遊客通過廊道驅除厄運、聽著風鈴聲感受夏日幸福的到來，左右兩側可以掛上繪馬祈福',
  gridRow: '9/13'

}
]

const Card = ({ props }) => {
  const { gridRow, num, alt, title, img, subtitle, subtitleColor, describe } = props 

  return (
    <div className={styles.attractionCard} style={{gridRow}}>
      <img src={num} alt={alt} className={styles.num} />
      <div className={styles.titleGroup}>
        <object data="/svg/icon_attraction_pin.svg" className={styles.icon}> </object>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.cardBody}>
        <img src={img} alt={title} className={styles.cardImg} />
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
          {cardList.map((card) => {
            return <Card props={card}/>
          })}
        </div>
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default Attraction;