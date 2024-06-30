import './App.css';
import { useState } from 'react';
import KeyVisionBanner from './components/Kv/kv';
import Header from './components/Header/header'
import Info from './components/ActivityInfo/activity_Info';
import Map from './components/ActivityInfo/activity_map';
import Attraction from './components/ActivityInfo/activity_attraction';
import Landscape from './components/ActivityInfo/activity_landscape';
import Activity from './components/ActivityMain/activity_main';
import Apply from './components/ActivityApply/activity_apply';
import Collect from './components/ActivityCollection/activity_collect';
import CollectSocail from './components/ActivityCollection/activity_collect_social';
import Store from './components/ActivityStore/activity_store';
import Lottery from './components/ActivityStore/activity_store_lottery';
import Traffic from './components/Traffic/traffic';
import QA from './components/QA/QA';
import Footer from './components/Footer/footer';

function App() {
  const [activity, setActivity] = useState(1)

  // Info頁可透過點擊連結至Activity頁，並改變上方tab為所選活動
  const handleClick = (num) => {
    setActivity(num)
  }

  return (
    <div className="App">
      <Header />
      <KeyVisionBanner />
      <Info setActivity={setActivity} />
      <Map />
      <Attraction />
      <Landscape />
      <Activity
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
  );
}

export default App;
