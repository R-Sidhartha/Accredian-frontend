import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { NotificationManager } from "./Components/UI/NotificationManager";
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <NotificationManager/>
      </Router>
    </div>
  );
}

export default App;
