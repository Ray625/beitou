import styles from './kv.module.scss';

// 將kv分成圖層並使用background-img設定
const KeyVisionBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.moonBg}></div>
      <div className={styles.title}></div>
      <div className={styles.decorate}></div>
      <div className={styles.grass}></div>
      <div className={styles.item}></div>
      <div className={styles.cloudLeft}></div>
      <div className={styles.cloudRight}></div> 
    </div>
  )
}

export default KeyVisionBanner;