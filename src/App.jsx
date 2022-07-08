import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import MainMenu from "./components/MainMenu";
import Numpad from "./components/Numpad";
import Display from "./components/Display";
import Footer from "./components/Footer";
import Result from "./components/Result";

const App = () => {
  const [showMainMenu, setShowMainMenu] = useState(true)
  const [showResult, setShowResult] = useState(false)
  const timeLimit = useSelector(state => state.data.limit)

  useEffect(() => {
    if (timeLimit !== null) {
      const timer = setTimeout(() => {
        setShowResult(true)
      }, timeLimit);
    }
  }, [timeLimit]);
  
  return (
    <div className="flex flex-col grow items-center justify-center w-screen h-screen bg-blue-200">
      {showMainMenu && <MainMenu show={showMainMenu} onClose={() => setShowMainMenu(false)} />}
      <h1 className="mb-8 text-6xl">Pauli Test</h1>
      <div className="flex flex-col bg-blue-100 p-2 rounded-xl mb-8">
        <Display />
        <Numpad />
      </div>
      {showResult && <Result />}
      <Footer />
    </div>
  );
}

export default App;
