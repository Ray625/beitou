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

export default TitleGroup;