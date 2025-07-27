import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Browsebooks from './components/Browsebooks.jsx';
import Bookdetails from './components/Bookdetails.jsx';
import Addbookpage from './components/Addbookpage.jsx';
import Home from './components/Home.jsx';
import { Books } from './utils/mockData.js';
import { Popularbookdata } from './utils/Popularbookdata.js';
import Error from './components/Error.jsx';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/store.js';

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home booksdata={Popularbookdata}/>
      },
      {
        path:"/browsebooks",
        element:<Browsebooks books={Books}/>
      },
      {
        path:"/addbookpage",
        element:<Addbookpage/>
      },
      {
        path:"/browsebooks/:id",
        element:<Bookdetails/>
      },
    ],
    errorElement:<Error/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
