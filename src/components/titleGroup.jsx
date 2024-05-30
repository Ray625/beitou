import styles from '../styles/titleGroup.module.scss';

const TitleGroup = ({ imgLeft, imgRight, title }) => {
  return (
    <div className={styles.titleGroup}>
      <object data={imgLeft} className={styles.icon}> </object>
      <h2 className={styles.title}>{title}</h2>
      <object data={imgRight} className={styles.icon}> </object>
    </div>
  )
}

const ImgTitle = ({ title, img }) => {
  return (
    <div className={styles.imgTitleGroup} style={{ backgroundImage: `url(${img})`}}>
      <h2 className={styles.imgTitle}>{title}</h2>
    </div>
  )
}

export {TitleGroup, ImgTitle};