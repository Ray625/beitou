import './App.css';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/event_Info';
import Map from './components/event_map';
import Attraction from './components/event_attraction';
import Landscape from './components/event_landscape';

function App() {
  return (
    <div className="App">
      <KeyVisionBanner />
      <Header />
      <Info />
      <Map />
      <Attraction />
      <Landscape />
    </div>
  );
}

export default App;
