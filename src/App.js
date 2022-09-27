import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/WelcomePage/Welcome";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
