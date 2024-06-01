import styles from '../styles/activity_main.module.scss';
// import { useState } from 'react';
import { ImgTitle } from './titleGroup';

const Activity = () => {
  return (
    <section className={styles.container} >
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <ImgTitle
          title='主題活動'
          img='/title/title_2.png'
          id='activity'
        />
        <div className={styles.activity}>
          活動面板
        </div>
      </div>
    </section>
  )
}

export default Activity;