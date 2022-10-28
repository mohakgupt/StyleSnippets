import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import your components and their codes here
import {Btn1, Btn2, Btn3, Btn4} from './components/buttons'
import { Btn1Code, Btn2Code, Btn3Code, Btn4Code } from './components/buttons-codes';

import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        React Snippets
      </header>
      <div className="App-body">
        
        <h3>Buttons</h3>
        <Popup trigger={<Btn1>Button 1</Btn1>} 
        position="right center">
          <pre>
            {Btn1Code}
          </pre>
        </Popup>
        <Popup trigger={<Btn2>Button 2</Btn2>} 
        position="right center">
          <pre>
            {Btn2Code}
          </pre>
        </Popup>
        <Popup trigger={<Btn3>Button 3</Btn3>} 
        position="right center">
          <pre>
            {Btn3Code}
          </pre>
        </Popup>
        <Popup trigger={<Btn4>Button 4</Btn4>} 
        position="right center">
          <pre>
            {Btn4Code}
          </pre>
        </Popup>
        
      </div>
    </div>
  );
}

export default App;
