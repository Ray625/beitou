import styles from '../styles/activity_main.module.scss';
import { useState } from 'react';

const Activity = () => {
  return (
    <section className={styles.container} id='activity'>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>主題活動</h2>
        </div>
        <div className={styles.activity}>
          活動面板
        </div>
      </div>
    </section>
  )
}

export default Activity;