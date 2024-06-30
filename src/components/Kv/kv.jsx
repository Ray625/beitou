import styles from './kv.module.scss';
import Loading from '../Ui/loading';
import { useState, useEffect } from 'react';
import { useDevice } from '../../contexts/DeviceContext';
import { Container } from '../Ui/container';

// 將檔案較大及設有動畫的圖片預先載入
const images = [
  '/img/KV_img/mobile/KV_3_bg_m.jpg',
  '/img/KV_img/mobile/KV_1_title_m.png',
  '/img/KV_img/mobile/KV_2_subtitle_m.png',
  '/img/KV_img/mobile/KV_4_sky_m.png',
  '/img/KV_img/mobile/KV_6_item_m.png',
  '/img/KV_img/PC/KV_3_bg.jpg',
  '/img/KV_img/PC/KV_1_title.png',
  '/img/KV_img/PC/KV_2_subtitle.png',
  '/img/KV_img/PC/KV_4_sky.png',
  '/img/KV_img/PC/KV_6_item.png'
];

// 將kv分成圖層並使用background-img設定
const KeyVisionBanner = () => {
  const [loadedImages, setLoadedImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const device = useDevice()

  // 將圖片載入
  useEffect(() => {
    const preloadImages = () => {
      const loaded = []
      images.forEach((image, index) => {
        const img = new Image()
        img.src = image
        img.onload = () => {
          loaded[index] = image
          setLoadedImages([...loaded])
        };
      });
    };

    preloadImages()
  }, [])

  // 圖片載入完畢後，再設置1.5秒的延遲，讓網速很快的使用者Loading畫面不會一出現就消失
  useEffect(() => {
    if (loadedImages.length < images.length) {
      document.body.style.overflow = 'hidden'
      setIsLoading(true)
    }
    if (loadedImages.length === images.length) {
      setTimeout(() => {
        document.body.style.overflow = 'auto'
        setIsLoading(false)
      }, 1500)
    }
  },[loadedImages])

  // 圖片載入後依照尺寸放入對應的背景、loading page消失後再套用class播放動畫
  return (
    <Container className={styles.container}>
      {isLoading && <Loading />}
      {device === 0 && <div className={styles.moonBg} style={{ backgroundImage: `url(${loadedImages[0]})` }}></div>}
      {device !== 0 && <div className={styles.moonBg} style={{ backgroundImage: `url(${loadedImages[5]})` }}></div>}
      {device === 0 &&
        <div className={styles.title} style={{ backgroundImage: `url(${loadedImages[1]})` }}>
          <div className={`${styles.subtitle} ${!isLoading ? styles.subFadein : '' }`} style={{ backgroundImage: `url(${loadedImages[2]})` }}></div>
        </div>
      }
      {device !== 0 &&
        <div className={styles.title} style={{ backgroundImage: `url(${loadedImages[6]})` }}>
          <div className={`${styles.subtitle} ${!isLoading ? styles.subFadein : '' }`} style={{ backgroundImage: `url(${loadedImages[7]})` }}></div>
        </div>
      }
      {device === 0 && <div className={`${styles.decorate} ${!isLoading ? styles.decorateFadein : '' }`} style={{ backgroundImage: `url(${loadedImages[3]})` }}></div>}
      {device !== 0 && <div className={`${styles.decorate} ${!isLoading ? styles.decorateFadein : '' }`} style={{ backgroundImage: `url(${loadedImages[8]})` }}></div>}
      <div className={styles.grass}></div>
      {device === 0 && <div className={styles.item} style={{ backgroundImage: `url(${loadedImages[4]})` }}></div>}
      {device !== 0 && <div className={styles.item} style={{ backgroundImage: `url(${loadedImages[9]})` }}></div>}
      <div className={styles.cloudLeft}></div>
      <div className={styles.cloudRight}></div>
    </Container>
  )
}

export default KeyVisionBanner;