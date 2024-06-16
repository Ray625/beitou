import styles from './activity_info.module.scss';
import { ImgTitle } from '../Ui/titleGroup';

// 畫面下方5個圖片用eventList array.map()產生，透過num設定點擊後跳轉至main section，並改變上方tab，由父層的state控制顯示的tab(第1、2、3、4、5個)，並且設定連結a href="#id"，使畫面跳轉至main section
const eventList = [{
    num: 1,
    name: '北投酒家菜宴席活動'
  }, {
    num: 2,
    name: '復刻酒家菜，音樂同歡唱'
  }, {
    num: 3,
    name: '親子冒險島'
  }, {
    num: 4,
    name: '親子魔法樂園'
  }, {
    num: 5,
    name: '夏日好聲音派對'
  }]

// props接受父層傳入的setActivity，藉此改變父層state
const Info = ({ setActivity }) => {
  const handleClick = (num) => {
    setActivity(num)
  }

  return (
    <section className={styles.container} >
      <div className={styles.wrapper}>
        <ImgTitle
          title='活動資訊'
          img='/title/title_1.png'
          id='info'
        />
        <div className={styles.describe}>為了形塑北投亮點特色，推廣北投商圈，將於113年7月的四個週末舉辦主題推廣活動，結合地方組織與商圈力量，串聯在地商家，呈現精彩盛會。
          <br />
          <br />
          活動期間設置五大亮點打卡裝置，並規劃以酒家菜與那卡西為主軸的行銷活動，復刻北投百年美食，吸引遊客夏季來北投品嚐美食，冬季來泡湯，串聯北投在地特約商店，感受北投魅力。
          <br />
          <br />
          無論夏季美食之旅或冬季溫泉之行，北投將帶給您難忘體驗，一起在北投，探索這片充滿驚喜的地方！</div>
        <div className={styles.infoGroup}>
          <div className={styles.time}>
            <img src="/svg/icon_info_time.svg" alt="icon" className={styles.icon}/>
            時間 : 7/5(五) ~ 7/28(日)
          </div>
          <div className={styles.location}>
            <img src="/svg/icon_info_pin.svg" alt="icon" className={styles.icon}/>
            地點 : 北投公園＆七星公園＆地熱谷
          </div>
        </div>
        <div className={styles.eventInfo}>
          {eventList.map(item => {
            return (
              <a href='#activity' className={styles.info} onClick={() => handleClick(item.num)} key={item.num}>{item.name}</a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Info;