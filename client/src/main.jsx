import { createRoot } from 'react-dom/client';
import { RouterProvider, useActionData, useNavigate } from 'react-router-dom';
import router from './routes/router';
import './index.css';
import { Provider } from 'react-redux'
import { store } from './store/store.js';
import App from "./App.jsx"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <RouterProvider router={router} />
  </Provider>
);
