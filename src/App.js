import {Switch, Route } from 'react-router-dom';
import Portal from './layers/Portal'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route      path="/" exact component={Portal} />
        </Switch>
    </div>
  );
}

export default App;
