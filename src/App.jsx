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
    </div>
  );
}

export default App;
