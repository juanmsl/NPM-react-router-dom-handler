import React from 'react';
import { BrowserRouter } from "react-router-dom";
import RouterDomHandler from 'components';


const App = () => {

  const routes = [
    {
      path: '/',
      render: () => (
        <main>
          <iframe
            src="https://codesandbox.io/embed/react-router-dom-handler-geh5e?fontsize=14&theme=dark"
            style={{
              width: "100%",
              height: "800px",
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