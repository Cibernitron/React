import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import { useState } from "react";
import AdminContext from "./context/AdminContext";
import { fakeMenu } from "./components/pages/order/Fake";

function App() {
  const [isAdmin, setIsAdmin] = useState();
  const [list, setList] = useState(fakeMenu);
  const [deleteList, setDeleteList] = useState([]);
  const [cartList, setCartList] = useState([]);

  const adminContextValue = {
    isAdmin,
    setIsAdmin,
    list,
    setList,
    deleteList,
    setDeleteList,
    cartList,
    setCartList,
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
