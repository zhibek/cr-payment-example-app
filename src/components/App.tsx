import { Provider } from 'react-redux';
import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <h1>Payment Example App</h1>
      <p>Testing</p>
    </Provider>
  );
}

export default App;
