import './App.css';
import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import Store from './redux/Store';
import HookCakeContainer from './Components/HookCakeContainer';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <CakeContainer />
        <HookCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
