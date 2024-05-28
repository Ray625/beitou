import styles from '../styles/titleGroup.module.scss';

const TitleGroup = ({ img, title, ariaLabel }) => {
  return (
    <div className={styles.titleGroup}>
      <object data={img} aria-label={ariaLabel} className={styles.icon}> </object>
      <h2 className={styles.title}>{title}</h2>
      <object data={img} aria-label={ariaLabel}  className={styles.icon}> </object>
    </div>
  )
}

export default TitleGroup;