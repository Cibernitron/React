import styled from "styled-components";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";

export default function AddButton({ label, selected, hovered }, { Icon }) {
  const { isAdmin } = useContext(AdminContext);

  return (
    <AddButtonStyled
      className={`buttonContainer ${
        isAdmin & selected ? "selectedButton" : ""
      }${isAdmin & hovered ? "hoveredButton" : ""}`}
    >
      <span>{label}</span>
      {Icon && Icon}
    </AddButtonStyled>
  );
}

const AddButtonStyled = styled.button`
  background: #63a5aa;
  border: 1px solid #63a5aa;
  border-radius: 5px;
  color: white;
  font-size: 9px;
  font-weight: 500;
  padding: 16px 24px;
  cursor: pointer;
  line-height: 0;

  &:hover:not(:disabled) {
    background: white;
    color: #63a5aa;
    border: 1px solid #63a5aa;
    transition: all 0.3s ease-in-out;
    /* transform: scale(1.05); */
  }
  &:active {
    color: white;
    background: #63a5aa;
    border: 1px solid #63a5aa;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
