import styles from '../styles/activity_landscape.module.scss';
import { TitleGroup } from './titleGroup';

const cardList = [{
  title: '浪漫月球',
  location: '北投公園＆七星公園',
  img: '/attraction/image_6.png'
},{
  title: '星空祝福',
  location: '北投公園',
  img: '/attraction/image_7.png'
},{
  title: '奇幻森林',
  location: '北投公園',
  img: '/attraction/image_8.png'
},{
  title: '魔法小精靈',
  location: '北投公園',
  img: '/attraction/image_9.png'
},{
  title: '點點螢火蟲',
  location: '地熱谷入口',
  img: '/attraction/image_10.png'
  },]

const Card = ({ props }) => {
  const { title, location, img } = props
  
  return (
    <div className={styles.card}>
      <img src={img} alt={location} className={styles.img} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.location}>
        <object data="/svg/icon_attraction_pin.svg" className={styles.icon}> </object>
        {location}
      </div>
    </div>
  )
  }

const Landscape = () => {
  return (
    <section className={styles.container}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
      <TitleGroup
        imgLeft='svg/icon_star_left.svg'
        title='環境光地景'
        imgRight='svg/icon_star_right.svg'
      />
        <div className={styles.cardList}>
          {cardList.map((card, index) => {
            return <Card props={card} key={index}/>
          })}
        </div>
      </div>
      <div className={styles.footer}></div>
    </section>
  )
}

export default Landscape;