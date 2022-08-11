import logo from './logo.svg';
import './App.css';
import ColorComponent from './Components/ColorRenderer/ColorComponent';
import DarkMode from './Components/DarkMode/DarkMode';
import Form from './Components/FormValidation/Form';
import DogImage from './Components/DogImage/DogImage';

function App() {
  return (
    <div className="App">
      {/* <ColorComponent /> */}
      {/* <DarkMode/> */}
      {/* <Form/> */}
      <DogImage/>
    </div>
  );
}

export default App;
