import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './stores';
import Navigation from './navigation';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<>Loading...</>}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
