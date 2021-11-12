# React Router Dom Handler

Controller for React Router Dom to create easy nested routes in different apps

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

Read the blog about how to use it [here](https://juanmsl.com/blog/manage-multiple-sub-routes-in-your-app-with-react-router-dom/?source=npm)

## Props

Prop|Type|Default Value|Options|Description
----|----|-------------|-------|-----------
routes|json list|[]||The routes that should be rendered as [Route component](https://reactrouter.com/web/api/Route/component) or as [Redirect component](https://reactrouter.com/web/api/Redirect) inside a [Switch component](https://reactrouter.com/web/api/Switch).

> Any other prop passed to the `RouterDomHandler` component will be [Switch props](https://reactrouter.com/web/api/Switch).