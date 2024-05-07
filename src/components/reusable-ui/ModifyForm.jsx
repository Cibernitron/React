import styled from "styled-components";
import { useState, useContext } from "react";
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import AdminContext from "../../context/AdminContext";
import { theme } from "../../theme";

const Form = ({ selectedCard, onAddProduct }) => {
  console.log(selectedCard.imageSource);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const { list } = useContext(AdminContext);

  const handleAddProduct = () => {
    const newProduct = {
      id: list.length,
      imageSource: newProductImage || selectedCard.imageSource,
      title: newProductName || selectedCard.title,
      price: newProductPrice || selectedCard.price,
    };
    onAddProduct(newProduct);
    // Clear input fields after adding the product
    setNewProductName("");
    setNewProductPrice("");
    setNewProductImage("");
  };

  return (
    <FormContainer>
      <Image src={selectedCard.imageSource}></Image>
      <Product>
        <DivInput>
          <GiCupcake className="icon" />
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder={selectedCard.title}
          />
        </DivInput>
        <DivInput>
          <BsFillCameraFill className="icon" />
          <input
            type="text"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            placeholder={selectedCard.price}
          />
        </DivInput>
        <DivInput>
          <MdOutlineEuro className="icon" />
          <input
            type="text"
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
            placeholder={selectedCard.imageSource}
          />
        </DivInput>
        <p>Cliquer sur un produit pour le modifier en temps réel</p>
      </Product>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  display: flex;
`;
const Product = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    color: ${theme.colors.primary};
  }
`;
const Image = styled.img`
  width: 25%;
  height: 25%;
`;
const DivInput = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #f1f0f0;
  input {
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: #f1f0f0;
  }

  .icon {
    width: 30px;
    height: 30px;
    padding: 0.5rem;
    opacity: 50%;
  }
`;

export default Form;
