import logo from './logo.svg';
import './App.css';
import ColorComponent from './Components/ColorRenderer/ColorComponent';
import DarkMode from './Components/DarkMode/DarkMode';

function App() {
  return (
    <div className="App">
      {/* <ColorComponent /> */}
      <DarkMode/>
    </div>
  );
}

export default App;
