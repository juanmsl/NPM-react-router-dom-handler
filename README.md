# React Router Dom Handler

Controller for React Router Dom to create easy nested routes in different apps

## Demo

See [this demo page](https://codesandbox.io/s/react-router-dom-handler-geh5e?fontsize=14&hidenavigation=1&theme=dark) and check it out.

## Installation

npm
```
npm install react-router-dom-handler
```

yarn
```
yarn add react-router-dom-handler
```

## Usage

1. Import the library `react-router-dom-handler`

    ```javascript
    import RouterDomHandler from 'react-router-dom-handler';
    ```

1. Into your Router (`react-router-dom`), use the `RouterDomHandler` component as a `Switch`

    ```javascript
    import React from 'react';
    import { BrowserRouter } from "react-router-dom";
    import RouterDomHandler from 'react-router-dom-handler';

    const App = () => (
        <BrowserRouter>
            <RouterDomHandler />
        </BrowserRouter>
    );
    
    ```

1. Then just pass the routes as a json list to the `RouterDomHandler` component

    ```javascript
    import React from 'react';
    import { BrowserRouter } from "react-router-dom";
    import RouterDomHandler from 'react-router-dom-handler';

    const routes = [
        ...
    ];

    const App = () => (
        <BrowserRouter>
            <RouterDomHandler routes={routes} />
        </BrowserRouter>
    );
    
    ```

1. Each route should specified as follows, but always they need the path field:

    ```javascript
    {
        path: '', // Path for the route
        routes: [...]
    }
    ```
    Subroutes, the same format as a general route's list, this is usefull to specify subroutes nested to the principal route

    ---

    ```javascript
    {
        path: '', // Path for the route
        component: ComponentClassName
    }
    ```
    Specify the React component to render, just like prop `component` for [Route component](https://reactrouter.com/web/api/Route/component)

    ---

    ```javascript
    {
        path: '', // Path for the route
        render: () => <section></section>
    }
    ```
    Specify inline function to render, just like prop `render` for [Route component](https://reactrouter.com/web/api/Route/render-func)

    ---

    ```javascript
    {
        path: '', // Path for the route
        redirect: '/destiny'
    }
    ```
    Instead a Route component, it create a [Redirect component](https://reactrouter.com/web/api/Redirect), that will redirect from `path` to the specified path in `redirect`

    > If you just want to create a `redirect` without the `from` path, just leave de `path` empty (`''`)

    ---

    To pass any other Route or Redirect component props, just add them to the json object, for example a route with an exact path to `/home` ro render an specific component, and with case sensitive validation for the path.

    ```javascript
    {
        path: '/home',
        component: HomePage,
        exact: true,
        sensitive: true
    }
    ```

    To know the other props you could use just read the `react-router-dom` documentation for [Route component](https://reactrouter.com/web/api/Route/component) and [Redirect component](https://reactrouter.com/web/api/Redirect).


## Example

To generate the routes

```
/home/
/home/about
/home/prices
/contact/:userId
```

```javascript
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterDomHandler from 'react-router-dom-handler';
import { HomeAboutPage, HomePricesPage } from './pages';


const App = () => {

  const routes = [
    {
      path: '/home',
      routes: [
          {
              path: '/',
              exact: true,
              children: () => (
                  <h1>Hello world, I'm using react-router-dom-handler</h1>
              )
          },
          {
              path: '/about',
              component: HomeAboutPage
          },
          {
              path: '/prices',
              component: HomePricesPage
          }
      ]
    },
    {
      path: '/contact',
      routes: [
          {
              path: '/:userId',
              render: ({ match }) => (
                  <main>Hello {match.params.userId}</main>
              )
          }
      ]
    },
    {
      path: '',
      redirect: '/home'
    }
  ];

  return (
    <BrowserRouter>
      <RouterDomHandler
        routes={routes}
      />
    </BrowserRouter>
  );
}
```

## Props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
routes|json list|[]||The routes that should be rendered as [Route component](https://reactrouter.com/web/api/Route/component) or as [Redirect component](https://reactrouter.com/web/api/Redirect) inside a [Switch component](https://reactrouter.com/web/api/Switch).

> Any other prop passed to the `RouterDomHandler` component will be [Switch props](https://reactrouter.com/web/api/Switch).