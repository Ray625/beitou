import styles from './activity_store.module.scss';
import { TitleGroup, ImgTitle } from '../Ui/titleGroup';
import { LinkBtn } from '../Ui/button';
import { Container, Wrapper } from '../Ui/container';
import { Describe } from '../Ui/describe';

// 畫面下方地圖用google我的地圖嵌入，但遇到問題是如果使用google map的app打開，會無法正確地顯示內容的資訊(商家名稱、優惠內容等..)，所以下方的外部連結是設定為google map的清單版本
const Store = () => {
  const handleClick = () => {
    window.open('https://user234859.pse.is/5zwnfy', '_blank');
  }

  return (
    <Container className={styles.container}>
      <div className={styles.bg}></div>
      <Wrapper className={styles.wrapper}>
        <ImgTitle
          title='特約商店'
          img='/title/title_5.png'
          id='store'
          />
        <TitleGroup
          title='專屬優惠'
          imgLeft='/svg/icon_discount.svg'
          imgRight='/svg/icon_discount.svg'
        />
        <Describe
          describe='串連百家特約店家響應活動，特別推出的活動期間專案優惠！詳細店家優惠資訊請至線上特約店家地圖或至官方FB粉絲專頁查詢'
        />
        <div className={styles.mapWrapper}>
          <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1EeiFxZZvKwfa5wnt7iBPt0tJh6JmlwY&ehbc=2E312F&ll=25.13319859043615, 121.50141742600563&z=15&output=embed&noprof=1" width="640" height="480" className={styles.map} title='特約商店地圖'></iframe>
        </div>
        <LinkBtn
          title='線上特約店家地圖'
          color='#FF7628'
          onClick={handleClick}
          />
      </Wrapper>
    </Container>
  )
}

export default Store;