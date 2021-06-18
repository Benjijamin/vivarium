import logo from './logo.svg';
import './App.css';
import Temp from './components/temp';
import Led from './components/led';
import Cam from './components/cam';
import Humidif from './components/humidif';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Vivarium 1</h1>
      </header>
      <br></br>
      <br></br>
      <br></br>
      <div class="container">
        <Temp></Temp>
      </div>
      <div class="container">
        <Led></Led>
        <Cam></Cam>
        <Humidif></Humidif>
      </div>
    </div>
  );
}

export default App;
