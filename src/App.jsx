// import './App.css';
// // import { , Route, Routes } from 'react-router-dom';
// import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from './Components/Home/Home.jsx';

// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Home />}>
//     </Route>
//   )
// );
// function App() {
//   return (

//     ReactDOM.createRoot(document.getElementById("root")).render(
//       <React.StrictMode>
//         <RouterProvider router={router} />
//       </React.StrictMode>
//     )
//   )
// }
// export default App;


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';


const routes = [
  {
    path: "/",
    element: <Home />,
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}
ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);

export default App;