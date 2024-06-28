import { useState } from 'react';
import KeyVisionBanner from '../components/Kv/kv';
import HeaderEn from '../components/Header/header_en'
import InfoEn from '../components/ActivityInfo/activity_Info_en';
import Map from '../components/ActivityInfo/activity_map';
import AttractionEn from '../components/ActivityInfo/activity_attraction_en';
import LandscapeEn from '../components/ActivityInfo/activity_landscape_en';
import ActivityEn from '../components/ActivityMain/activity_main_en';
import Apply from '../components/ActivityApply/activity_apply';
import Collect from '../components/ActivityCollection/activity_collect';
import CollectSocail from '../components/ActivityCollection/activity_collect_social';
import Store from '../components/ActivityStore/activity_store';
import Lottery from '../components/ActivityStore/activity_store_lottery';
import Traffic from '../components/Traffic/traffic';
import QA from '../components/QA/QA';
import Footer from '../components/Footer/footer';

const HomepageEn = () => {
  const [activity, setActivity] = useState(1)

  // Info頁可透過點擊連結至Activity頁，並改變上方tab為所選活動
  const handleClick = (num) => {
    setActivity(num)
  }

  return (
    <div>
      <HeaderEn />
      <KeyVisionBanner />
      <InfoEn setActivity={setActivity} />
      <Map />
      <AttractionEn />
      <LandscapeEn />
      <ActivityEn
        activity={activity}
        setActivity={handleClick}
      />
      <Apply />
      <Collect />
      <CollectSocail />
      <Store />
      <Lottery />
      <Traffic />
      <QA />
      <Footer />
    </div>
  )
}

export default HomepageEn;