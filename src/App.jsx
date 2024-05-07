import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import { useState } from "react";
import AdminContext from "./context/AdminContext";
function App() {
  const [isAdmin, setIsAdmin] = useState();
  const [list, setList] = useState([]);
  const [deleteList, setDeleteList] = useState([]);

  const adminContextValue = {
    isAdmin,
    setIsAdmin,
    list,
    setList,
    deleteList,
    setDeleteList,
  };

  return (
    <AdminContext.Provider value={adminContextValue}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </AdminContext.Provider>
  );
}

export default App;
