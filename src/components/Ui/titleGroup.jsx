import styles from './titleGroup.module.scss';

const TitleGroup = ({ imgLeft, imgRight, title }) => {
  return (
    <div className={styles.titleGroup}>
      <img src={imgLeft} alt="icon" className={styles.icon} />
      <h2 className={styles.title}>{title}</h2>
      <img src={imgRight} alt="icon" className={styles.icon} />
    </div>
  )
}

// 設定id讓header按鍵跳轉，有在/src/index.css中設定scroll-padding-top預留上方header位置
const ImgTitle = ({ title, img, id}) => {
  return (
    <div className={styles.imgTitleGroup} style={{ backgroundImage: `url(${img})`}} id={id ? id : ''}>
      <h2 className={styles.imgTitle}>{title}</h2>
    </div>
  )
}

export {TitleGroup, ImgTitle};