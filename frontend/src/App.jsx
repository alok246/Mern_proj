// import React from 'react'
// this above line is not necessary after react 18
// npm i react-hot-toast iske alert msg design kiye hue hote hai 
// use rafce for boilerplate
// alt + shift + downkey for same line niche bhi
// * for koi page jo define na kiya gaya ho then * wala page render hoga
// only problem in notfound and success page check it out later data store ho raha hai
// after successfully submit submit page nhi khul raha 

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './Pages/Home';
import Success from  './Pages/Success';
import NotFound  from './Pages/NotFound';

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/" element={<Success/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Toaster/>
  </Router>;
};

export default App;





















/*this all code are automatic while installing react app we create our own above*/
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
