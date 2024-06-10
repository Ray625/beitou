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
        <img src={src} alt={alt} className={styles.zoomInImg} />
      </div>
    </div>
  )
}
  
const ZoomInImg = ({ src, alt, changeZindex }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

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
          <img src={src} alt={alt} className={styles.thumbnail} />
        </div>
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={handleClose} />}
    </>
  )
}

export default ZoomInImg;