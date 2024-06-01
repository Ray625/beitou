import styles from '../styles/activity_collect.module.scss';
import { ImgTitle, TitleGroup } from './titleGroup';
import { LinkBtn } from './button';

const Collect = () => {
  const handleClick = () => {
    window.open('https://www.netflix.com/browse', '_blank')
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
        <div className={styles.point}>數量有限，抽完為止！</div>
        <div className={styles.rule}>
          <img src="/event/image_step.png" alt="集章規則" className={styles.img} />
        </div>
        <div className={styles.prizeGroup}>
          <div className={styles.prize}>
            <img src="/prize/prize_1.png" alt="首獎" className={styles.prizeImg} />
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Samsung Galaxy S24</div>
            <div className={styles.subtitle}>256GB｜12GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$43,900</div>
          </div>
          <div className={styles.prize}>
            <img src="/prize/prize_1.png" alt="首獎" className={styles.prizeImg} />
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Samsung Galaxy S24</div>
            <div className={styles.subtitle}>256GB｜12GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$43,900</div>
          </div>
          <div className={styles.prize}>
            <img src="/prize/prize_1.png" alt="首獎" className={styles.prizeImg} />
            <div className={styles.tag}>首獎</div>
            <div className={styles.title}>Samsung Galaxy S24</div>
            <div className={styles.subtitle}>256GB｜12GB</div>
            <div className={styles.note}>乙台・1名・市價 NT$43,900</div>
          </div>
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