import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// import your components and their codes here
import {Btn1} from './components/buttons'
import { Btn1Code } from './components/buttons-codes';

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
        
      </div>
    </div>
  );
}

export default App;
