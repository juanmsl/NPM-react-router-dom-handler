# React Router Dom Handler

Controller for React Router Dom to create easy nested routes in different apps

> Package in development

## Demo

## Installation

npm
```
npm install react-router-dom-handler
```

yarn
```
yarn add react-router-dom-handler
```

## usage

> app/index.js
```javascript
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterDomHandler from 'react-router-dom-handler';
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
    <BrowserRouter>
      <Navbar />
      <RouterDomHandler
        routes={routes}
      />
    </BrowserRouter>
  );
}
```

> app/home/index.js
```javascript
import OverviewPage from './overview';
import AboutPage from './about';

const routes = [
    {
        path: '/',
        exact: true,
        component: OverviewPage
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage
    }
];

export default routes;
```

> app/home/overview/index.js
```javascript
import React from 'react';

const OverviewPage = ({ match }) => (
    <main>
        <h1>Overview Home Page</h1>
        <h2>{match.url}</h2>
    </main>
);

export default OverviewPage;
```

## Props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
