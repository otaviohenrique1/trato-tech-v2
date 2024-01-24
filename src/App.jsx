import store from './store';
import Router from 'routes';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
