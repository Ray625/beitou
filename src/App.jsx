import './App.css';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/event_Info';
import Map from './components/event_map';
import Attraction from './components/event_attraction';

function App() {
  return (
    <div className="App">
      <KeyVisionBanner />
      <Header />
      <Info />
      <Map />
      <Attraction />
    </div>
  );
}

export default App;
