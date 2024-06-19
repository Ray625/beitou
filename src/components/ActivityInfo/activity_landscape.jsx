import styles from './activity_landscape.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { Container, Wrapper } from '../Ui/container';

// 畫面用cardList array.map()產生
const cardList = [{
  title: '浪漫月球',
  location: '北投公園＆七星公園',
  img: '/attraction/image_6.png'
},{
  title: '星空祝福',
  location: '北投公園 (涼亭＆走道)',
  img: '/attraction/image_7.png'
},{
  title: '奇幻森林',
  location: '北投公園',
  img: '/attraction/image_8.png'
},{
  title: '點點螢火蟲',
  location: '地熱谷入口',
  img: '/attraction/image_9.png'
  }]

const Card = ({ props }) => {
  const { title, location, img } = props

  return (
    <div className={styles.card}>
      <img src={img} alt={location} className={styles.img} loading='lazy'/>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.location}>
        <img src="/svg/icon_attraction_pin.svg" alt="icon" className={styles.icon} loading='lazy'/>
        {location}
      </div>
    </div>
    )
  }

const Landscape = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper>
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
      </Wrapper>
      <div className={styles.footer}></div>
    </Container>
  )
}

export default Landscape;