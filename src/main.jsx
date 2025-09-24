import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import { UserProvider } from './context/userContext';
import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
       <StrictMode>
      <HashRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </HashRouter>
       </StrictMode>
    </Provider>
 
);
