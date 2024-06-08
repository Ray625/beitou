import styles from '../styles/zoomInImg.module.scss';
import { useState } from 'react';

const ImageModal = ({ src, alt, onClose }) => {
  return (
    <div className={styles.modal} onClick={onClose}>
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

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleOpen}
        className={styles.thumbnail}
      />
      {isModalOpen && <ImageModal src={src} alt={alt} onClose={handleClose} />}
    </>
  )
}

export default ZoomInImg;