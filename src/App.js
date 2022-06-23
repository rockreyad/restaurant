import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, MainContainer, CreateContainer } from "./components";

import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col items-center justify-center bg-primary">
        <Header />

        <main className="mt-4 md:mt-2 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes> 
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
