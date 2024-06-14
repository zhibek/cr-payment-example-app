import { Provider } from 'react-redux';

import store from '../store';
import PaymentProviders from './PaymentProviders';

function App() {
  return (
    <Provider store={store}>
      <h1>Payment Example App</h1>
      <PaymentProviders />
    </Provider>
  );
}

export default App;
