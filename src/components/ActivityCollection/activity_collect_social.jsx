import styles from './activity_collect_social.module.scss';
import { TitleGroup } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';

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
        <div className={styles.describe}>在2024年7月28日前，於「2024北投夏日魔法節」LINE官方帳號內集滿5點電子戳章，並將電子戳章截圖上傳至溫泉協會粉絲團，即可參加社群抽獎，獎項包括北投旅宿業者提供的住宿和泡湯券！</div>
        <div className={styles.point}>詳情請點選下方的溫泉協會粉絲團連結</div>
        <img src="/event/image_card.png" alt="集章卡範例" className={styles.img} loading='lazy'/>
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