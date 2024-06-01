import styles from '../styles/activity_store.module.scss';
import { TitleGroup, ImgTitle } from './titleGroup';
import { LinkBtn } from './button';

const Store = () => {
  const handleClick = () => {
    window.open('https://www.google.com/maps/d/u/0/viewer?mid=1lXch4l0Uu1sCIqkw2O70UE-f5l7ImJzJ&ll=25.056422600000005%2C121.50993679999999&z=16', '_blank');
  }

  return (
    <section className={styles.container} >
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='特約店家'
          img='/title/title_5.png'
          id='store'
        />
        <TitleGroup
          title='專屬優惠'
          imgLeft='/svg/icon_discount.svg'
          imgRight='/svg/icon_discount.svg'
        />
        <div className={styles.describe}>串連百家特約店家響應活動，特別推出的活動期間專案優惠！詳細店家優惠資訊請至線上特約店家地圖或至官方FB粉絲專頁查詢～</div>
        <div className={styles.mapWrapper}>
          <iframe src="https://www.google.com/maps/d/embed?mid=17YMZGIAvu2E1HQuevsYgQVF-XUp6WhI&ehbc=2E312F&noprof=1" className={styles.map}></iframe>
        </div>
        <LinkBtn
          title='線上特約店家地圖'
          color='#FF7628'
          onClick={handleClick}
        />
      </div>
    </section>
  )
}

export default Store;