import styled from "styled-components";
import Card from "./Card";
import AdminPanel from "./AdminPanel";
import { useContext, useState } from "react";
import AdminContext from "../../context/AdminContext";
import { theme } from "../../theme";

export default function DisplayMenu() {
  const { isAdmin, list, deleteList } = useContext(AdminContext);
  const activeList = list.filter((element) => !deleteList.includes(element));
  const reversedList = activeList.slice().reverse();
  const reload = () => {
    window.location.reload();
  };

  const [selectedCard, setSelectedCard] = useState();
  const [panel, setPanel] = useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setPanel(true);
  };
  return (
    <Menu>
      {reversedList.length === 0 ? (
        isAdmin ? (
          <EmptyMessage>
            <p> Il n'y a plus de produits disponibles ?</p>
            <p>Cliquez ci-dessous pour les réinitialiser</p>
            <PrimaryButton onClick={reload}>
              Générer de nouveaux gateaux
            </PrimaryButton>
          </EmptyMessage>
        ) : (
          <EmptyMessage>
            <p> Victime de notre succès</p>
            <p>De nouvelles recettes sont en préparation, revenez vite !</p>
          </EmptyMessage>
        )
      ) : (
        reversedList.map((element) => (
          <CardContainer
            onClick={() => handleCardClick(element)}
            key={element.id}
            className={
              isAdmin
                ? selectedCard && selectedCard.id === element.id
                  ? "backgroundSelected"
                  : "backgroundNotSelected"
                : ""
            }
          >
            <Card
              key={element.id}
              element={element}
              price={element.price}
              name={element.title}
              image={element.imageSource}
              selected={selectedCard && element.id === selectedCard.id}
            />
          </CardContainer>
        ))
      )}

      {isAdmin ? (
        <AdminPanel
          isAdmin={true}
          selectedCard={selectedCard}
          panel={panel}
          handleCardClick={handleCardClick}
        />
      ) : null}
    </Menu>
  );
}

const Menu = styled.div`
  height: 100%;
  width: 85%;
  overflow-y: auto;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background-color: white;
  padding: 50px 0;
  gap: 60px;
  box-shadow: inset -10px 10px 30px 0px rgba(73, 73, 73, 0.5);

  scrollbar-width: none;
  .height250 {
    height: 250px;
  }
  .height0 {
    height: 0px;
  }
  .backgroundSelected {
    background-color: ${theme.colors.primary};
  }
  .backgroundNotSelected {
    background-color: white;
    &:hover {
      background-color: ${theme.colors.primary};
    }
  }
`;
const EmptyMessage = styled.div`
  p {
    font-size: 35px;
    font-family: "Pacifico", sans-serif;
    opacity: 50%;
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;
const PrimaryButton = styled.button`
  color: white;
  background-color: ${theme.colors.primary};
  border: none;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  width: 40%;
`;
const CardContainer = styled.div`
  border-radius: 16px;
`;
