import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GrDown, GrAdd, GrEdit } from "react-icons/gr";
import Form from "./Form";
import ModifyForm from "./ModifyForm";
import AdminContext from "../../context/AdminContext";
import { FiCheck } from "react-icons/fi";
import { HiCursorClick } from "react-icons/hi";

const AdminPanel = (element, handleCardClick) => {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isAddOrModify, setIsAddOrModify] = useState(true);
  const [selectedTab, setSelectedTab] = useState("addProduct");
  const [isProductAdded, setIsProductAdded] = useState(false);
  const { list, setList } = useContext(AdminContext);
  useEffect(() => {
    localStorage.setItem(
      "adminPanelState",
      JSON.stringify({ isPanelOpen, selectedTab })
    );
    localStorage.setItem("list", JSON.stringify(list));
  }, [isPanelOpen, selectedTab, list]);

  useEffect(() => {
    const savedState = localStorage.getItem("adminPanelState");
    const savedlist = localStorage.getItem("list");
    if (savedState) {
      const { isPanelOpen, selectedTab } = JSON.parse(savedState);
      setIsPanelOpen(isPanelOpen);
      setSelectedTab(selectedTab);
    }
    if (savedlist) {
      setList(JSON.parse(savedlist));
    }
  }, []);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const handleAddProduct = (newProduct) => {
    const newProductUpdate = [...list, newProduct];
    setList(newProductUpdate);
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);
  };

  const handleModifyProduct = (updatedProduct) => {
    const updatedlist = list.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setList(updatedlist);
    setList(updatedlist);
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);
  };
  useEffect(() => {
    if (element.panel) {
      handleCardClickIntern();
    }
  }, [element.panel, handleCardClick]);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setIsPanelOpen(true);
    setIsAddOrModify(tab === "addProduct");
  };
  const handleCardClickIntern = () => {
    setSelectedTab("editProduct");
    setIsAddOrModify(false);
    setIsPanelOpen(true);
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
            )}
          </>
        ) : element.selectedCard ? (
          <ModifyForm
            onModifyProduct={handleModifyProduct}
            selectedCard={element.selectedCard}
          />
        ) : (
          <ModifyMessage>
            Cliquer sur un produit pour le modifier
            <HiCursorClick className="icon" />
          </ModifyMessage>
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
const ModifyMessage = styled.p`
  color: black;
  opacity: 50%;
  font-size: 20px;
  font-family: "Pacifico", sans-serif;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StyledAdminPanel = styled.div`
  background-color: #ffffff;
  z-index: 100;
  width: 100%;
  bottom: -25px;
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
