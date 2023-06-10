import React from 'react'
import ReactDom from 'react-dom/client'
import App from './component/App.js'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const root=ReactDom.createRoot(document.querySelector("#root"))

root.render(<App/>)