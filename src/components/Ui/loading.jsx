import styles from './loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.colorFull}></div>
      </div>
    </div>
  )
}

export default Loading;