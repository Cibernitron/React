import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GrDown, GrAdd, GrEdit } from "react-icons/gr";
import Form from "./Form";
import { fakeMenu } from "../pages/order/Fake";
import AdminContext from "../../context/AdminContext";
import { FiCheck } from "react-icons/fi";

const AdminPanel = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isAddOrModify, setIsAddOrModify] = useState(true);
  const [selectedTab, setSelectedTab] = useState("addProduct");
  const [products, setProducts] = useState(fakeMenu);
  const [isProductAdded, setIsProductAdded] = useState(false); // Nouvel état pour suivre si le produit est ajouté avec succès
  const { list, setList } = useContext(AdminContext);

  useEffect(() => {
    localStorage.setItem(
      "adminPanelState",
      JSON.stringify({ isPanelOpen, selectedTab })
    );
    localStorage.setItem("products", JSON.stringify(products));
  }, [isPanelOpen, selectedTab, products]);

  useEffect(() => {
    const savedState = localStorage.getItem("adminPanelState");
    const savedProducts = localStorage.getItem("products");
    if (savedState) {
      const { isPanelOpen, selectedTab } = JSON.parse(savedState);
      setIsPanelOpen(isPanelOpen);
      setSelectedTab(selectedTab);
    }
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleAddProduct = (newProduct) => {
    const newProductUpdate = [...products, newProduct];
    setProducts(newProductUpdate);
    setList(newProductUpdate);
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setIsPanelOpen(true);
    setIsAddOrModify(tab === "addProduct");
  };

  return (
    <StyledAdminPanel className={isPanelOpen ? "height250" : "height0"}>
      <Buttons>
        <Button onClick={togglePanel}>
          <GrDown className={isPanelOpen ? "bottom" : "top"} />
        </Button>

        <Button
          onClick={() => handleTabChange("addProduct")}
          className={isAddOrModify ? "active" : ""}
        >
          <GrAdd />
          <Text>Ajouter un produit</Text>
        </Button>

        <Button
          onClick={() => handleTabChange("editProduct")}
          className={isAddOrModify ? "" : "active"}
        >
          <GrEdit />
          <Text>Modifier un produit</Text>
        </Button>
      </Buttons>
      <DescriptionPanel>
        {isAddOrModify ? (
          <>
            <Form onAddProduct={handleAddProduct} />
            {isProductAdded && (
              <MessageContainer>
                <FiCheck className="icon" />
                <Message>Produit ajouté avec succès !</Message>
              </MessageContainer>
            )}{" "}
          </>
        ) : (
          "Modifier un article"
        )}
      </DescriptionPanel>
    </StyledAdminPanel>
  );
};

const MessageContainer = styled.div`
  position: absolute;
  bottom: 60px;
  left: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  .icon {
    color: #59cb59;
    border: 1px solid #59cb59;
    border-radius: 50px;
    padding: 1px;
    width: 20px;
    height: 20px;
  }
`;
const Message = styled.p`
  color: #59cb59;
`;
const StyledAdminPanel = styled.div`
  background-color: #ffffff;
  z-index: 100;
  width: 100%;
  bottom: 65px;
  margin-bottom: 65px;
  position: sticky;
  display: flex;
  box-shadow: inset 10px -20px 30px 0px rgba(73, 73, 73, 0.5),
    0px -5px 10px 0px rgba(73, 73, 73, 0.2),
    inset -10px -20px 30px 0px rgba(73, 73, 73, 0.5);
`;

const Buttons = styled.div`
  display: flex;
  position: absolute;
  top: -2.7rem;
  left: 3rem;
  .active {
    background-color: #4b4b4b;
    color: white;
  }
`;

const Button = styled.button`
  color: grey;
  background-color: white;
  border: none;
  border-bottom: 2px solid #cfcfcf;
  padding: 0 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0px -5px 10px 0px rgba(73, 73, 73, 0.2);

  &:hover {
    background-color: #4b4b4b;
    color: white;
  }

  .bottom {
  }
  .top {
    rotate: -180deg;
  }
`;

const DescriptionPanel = styled.div`
  margin: 1rem;
`;

const Text = styled.p``;

export default AdminPanel;
