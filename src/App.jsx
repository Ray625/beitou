import './App.css';
import KeyVisionBanner from './components/kv';
import Header from './components/header';
import Info from './components/event_Info';

function App() {
  return (
    <div className="App">
      <KeyVisionBanner />
      <Header />
      <Info />
    </div>
  );
}

export default App;
