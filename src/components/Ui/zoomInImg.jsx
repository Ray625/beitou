import styles from './zoomInImg.module.scss';
import { useState } from 'react';

const ImageModal = ({ src, alt, onClose }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className={styles.modal} onClick={onClose} role="button" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className={styles.modalContent}>
        <img src={src} alt={alt} className={styles.zoomInImg} loading='lazy'/>
      </div>
    </div>
  )
}

// changeZindex由父層傳入的function，可以改變父層container的z-index，讓畫面不會被header蓋住
const ZoomInImg = ({ src, alt, changeZindex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // overflow='hidden'讓圖片被放大時，後方畫面無法滾動
  const handleOpen = () => {
    setIsModalOpen(true)
    document.body.style.overflow='hidden'
    changeZindex(200)
  }

  const handleClose = () => {
    setIsModalOpen(false)
    document.body.style.overflow='auto'
    changeZindex(0)
  }

  // eslint建議加上鍵盤操作提升無障礙使用
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOpen();
    } else if (event.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <>
      <div
        role="button" tabIndex={0} onClick={handleOpen} onKeyDown={handleKeyDown} className={styles.thumbnailWrapper}
        >
          <img src={src} alt={alt} className={styles.thumbnail} loading='lazy'/>
        </div>
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={handleClose} />}
    </>
  )
}

export default ZoomInImg;