import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import Store from './redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
