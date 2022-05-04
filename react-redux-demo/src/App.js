import './App.css';
// import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import Store from './redux/Store';
import HookCakeContainer from './Components/HookCakeContainer';
import IcecreameContainer from './Components/IcecreameContainer';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HookCakeContainer />
        <IcecreameContainer />
      </div>
    </Provider>
  );
}

export default App;
