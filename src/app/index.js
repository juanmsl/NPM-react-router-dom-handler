import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterDomHandler from 'components';
import HomeRoutes from './home';
import ContactRoutes from './contact';
import Navbar from './navbar';


const App = () => {

  const routes = [
    {
      path: '/home',
      routes: HomeRoutes
    },
    {
      path: '/contact',
      routes: ContactRoutes
    },
    {
      path: '',
      redirect: '/home'
    }
  ];


  return (
    <BrowserRouter basename='/react-router-dom-handler'>

      <Navbar />

      <RouterDomHandler
        routes={routes}
      />
    </BrowserRouter>
  );

}

export default App;