import React, { useState, useRef } from "react";

import Numpad from "./components/Numpad";
import Display from "./components/Display";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState([])
  const prevNumber = useRef(null)

  return (
    <div className="flex flex-col grow items-center justify-center w-screen h-screen bg-blue-200">
      <h1 className="mb-8 text-6xl">Pauli Test</h1>
      <div className="flex flex-col bg-blue-100 p-2 rounded-xl mb-8">
        <Display />
        <Numpad />
      </div>
      <Footer />
    </div>
  );
}

export default App;
