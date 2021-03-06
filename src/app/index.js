import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterDomHandler from 'components';


const App = () => {

  const routes = [
    {
      path: '/',
      render: () => (
        <main className='app'>

          <section className='app__cover'>
            <h1>React Router Dom Handler</h1>
            <p>Controller for React Router Dom to create easy nested routes in different apps</p>
          </section>

          <iframe
            src="https://codesandbox.io/embed/react-router-dom-handler-geh5e?fontsize=14&theme=dark"
            className="app__codesandbox"
            style={{
              border: 0,
              borderRadius: "4px",
              overflow: "hidden"
            }}
            title="React Router Dom Handler"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
          ></iframe>
        </main>
      )
    },
    {
      path: '',
      redirect: '/'
    }
  ]

  return (
    <BrowserRouter basename='/react-router-dom-handler'>

      <RouterDomHandler
        routes={routes}
      />
    </BrowserRouter>
  );

}

export default App;