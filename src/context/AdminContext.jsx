import { createContext } from "react";

const AdminContext = createContext({
  isAdmin: false,
  setIsAdmin: () => {},
  list: [],
  setList: () => {},
  deleteList: [],
  setdeleteList: () => {},
});

export default AdminContext;
