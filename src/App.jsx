import './App.css';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/event_Info';
import Map from './components/event_map';

function App() {
  return (
    <div className="App">
      <KeyVisionBanner />
      <Header />
      <Info />
      <Map />
    </div>
  );
}

export default App;
