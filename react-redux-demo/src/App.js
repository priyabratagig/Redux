import './App.css';
// import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux'
import Store from './redux/Store';
// import HookCakeContainer from './Components/HookCakeContainer';
import IcecreameContainer from './Components/IcecreameContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';
import UsersContainer from './Components/UsersContainer';

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        {/* <CakeContainer /> */}
        {/* <HookCakeContainer /> */}
        <NewCakeContainer />
        <IcecreameContainer />
        <ItemContainer />
        <ItemContainer cake />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
