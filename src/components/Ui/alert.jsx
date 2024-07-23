import styles from './alert.module.scss'
import { useEffect, useState } from 'react'

const Alert = () => {
  const [alertOpen, setAlertOpen] = useState(true)

  useEffect(() => {
    if (alertOpen) {
      document.body.style.overflow='hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  },[alertOpen])

  const handleClose = () => {
    setAlertOpen(false)
  }

  return (
    <div className={`${styles.wrapper} ${!alertOpen ? styles.close: ''}`}>
      <div className={styles.alertBox}>
        <button className={styles.closeBtn} onClick={handleClose}></button>
        <h3 className={styles.title}>2024北投夏日魔法節 颱風公告</h3>
        <p className={styles.alertBody}>
        因應凱米颱風來襲，僅通知7/23 (二)、7/24 (三)活動異動，主燈「溫泉魔法師降臨」撤離，大會活動服務台移置新北投車站月台，預計復原時間7/25(四)。
        <br/>
        <br/>
        颱風期間請大家注意人身及居家安全，並歡迎於天氣轉晴後，再來北投遊逛。
        <br />
        <br />
        請隨時關注我們的最新公告，感謝配合！
        </p>
      </div>
    </div>
  )
}

export default Alert