import './App.css';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/activity_Info';
import Map from './components/activity_map';
import Attraction from './components/activity_attraction';
import Landscape from './components/activity_landscape';
import Activity from './components/activity_main';

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
    </div>
  );
}

export default App;
