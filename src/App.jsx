import './App.css';
import { useState } from 'react';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/activity_Info';
import Map from './components/activity_map';
import Attraction from './components/activity_attraction';
import Landscape from './components/activity_landscape';
import Activity from './components/activity_main';
import Apply from './components/activity_apply';
import Collect from './components/activity_collect';
import CollectSocail from './components/activity_collect_social';
import Store from './components/activity_store';
import Lottery from './components/activity_store_lottery';
import Traffic from './components/traffic';
import QA from './components/Q&A';
import Footer from './components/footer';

function App() {
  const [activity, setActivity] = useState(1)

  // Info頁可透過點擊連結至Activity頁，並改變顯示tab
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
      {/* <Traffic />
      <QA />
      <Footer /> */}
    </div>
  );
}

export default App;
