import './App.css';
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

function App() {
  return (
    <div className="App">
      <KeyVisionBanner />
      <Header />
      <Info />
      <Map />
      <Attraction />
      <Landscape />
      <Activity />
      <Apply />
      <Collect />
      <CollectSocail />
      <Store />
      <Lottery />
    </div>
  );
}

export default App;
