import {React, useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./Components/WelcomePage/Welcome";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import UserContext from "./context";
import DashBoard from "./Components/Dashboard/Dashboard";
import TransactionsComponent from "./Components/Dashboard/DashboardComponents/Transactions";

function App() {

  const [info, setInfo] = useState({}); // SALVA O NOME DE USUARIO E TOKEN QUE VEM DO BACK
  const [local, setLocal] = useState({}); // SALVA O TOKEN QUE VEM DO LOCAL STORAGE
  const contextValue = { info, setInfo, local, setLocal }

  return (
    <>
    <UserContext.Provider value={contextValue}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/transactions" element={<TransactionsComponent />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
