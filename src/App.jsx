// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import CartCard from './components/CartCard';

function App() {
  return (
    <Provider store={store}>
      <div className="container my-5">
        <CartCard />
      </div>
    </Provider>
  );
}

export default App;
