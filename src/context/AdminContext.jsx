import { createContext } from "react";

const AdminContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  list: [],
  setList: () => {},
  deleteList: [],
  setdeleteList: () => {},
  cartList: [],
  setCartList: () => {},
});
export default AdminContext;
