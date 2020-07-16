import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './Components/ColorPicker';
import SizeSetting from './Components/SizeSetting';
import Reset from './Components/Reset';
import Result from './Components/Result';

class App extends Component {

  render() { 
    return (  
      <div className="container mt-50">
      <div className="row">
        <ColorPicker/>
        <SizeSetting/>
        <Reset/>
        <Result/>
        </div>
      </div>
    );
  }
}
 
export default App;