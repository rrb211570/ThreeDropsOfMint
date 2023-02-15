import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './pages/Login/Login.js';
import LoadingScreen from './pages/LoadingScreen/LoadingScreen.js';
import Game from './pages/Game/Game.js';
import CollectedLore from './pages/CollectedLore/CollectedLore.js';
import Recipes from './pages/Recipes/Recipes.js';
import NoPage from './pages/NoPage.js';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  const [cartContents, setCartContents] = useState({});

  let updateCart = (dateAndTime, productID, count) => {
    let currentCartContents = cartContents;
    if (!currentCartContents.hasOwnProperty(dateAndTime)) currentCartContents[dateAndTime] = {};
    if (count > 0) currentCartContents[dateAndTime][productID] = count;
    else {
      delete currentCartContents[dateAndTime][productID];
      if (Object.entries(currentCartContents[dateAndTime]).length == 0) delete currentCartContents[dateAndTime];
    }
    setCartContents({ ...currentCartContents });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/loadingScreen' element={<LoadingScreen />} />
        <Route path='/game' element={<Game />} />
        <Route path='/collectedLore' element={<CollectedLore />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
