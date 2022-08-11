import logo from './logo.svg';
import './App.css';
import ColorComponent from './Components/ColorRenderer/ColorComponent';
import DarkMode from './Components/DarkMode/DarkMode';
import Form from './Components/FormValidation/Form';
import DogImage from './Components/DogImage/DogImage';
import ScoreCounter from './Components/ScoreCounter/ScoreCounter';
import WindowEvents from './Components/WindowsEvents/WindowEvents';
import ColorPickerComponet from './Components/ColorPicker/ColorPickerComponet';

function App() {
  return (
    <div className="App">
      {/* <ColorComponent /> */}
      {/* <DarkMode/> */}
      {/* <Form/> */}
      {/* <DogImage/> */}
      {/* <ScoreCounter/> */}
      {/* <WindowEvents/> */}
      <ColorPickerComponet />
    </div>
  );
}

export default App;
