import './App.css';
import AppRouter from './config/AppRouter';
import { Provider } from 'react-redux';
import Store from './store';

function App() {
  return (
    <div>
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
