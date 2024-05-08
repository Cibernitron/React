import styled from "styled-components";
import { useState, useEffect } from "react";
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../theme";

const Form = ({ selectedCard, onModifyProduct }) => {
  const [newProductName, setNewProductName] = useState(selectedCard.title);
  const [newProductPrice, setNewProductPrice] = useState(selectedCard.price);
  const [newProductImage, setNewProductImage] = useState(
    selectedCard.imageSource
  );
  const [previewImage, setPreviewImage] = useState(selectedCard.imageSource);

  useEffect(() => {
    setNewProductName(selectedCard.title);
    setNewProductPrice(selectedCard.price);
    setNewProductImage(selectedCard.imageSource);
    setPreviewImage(selectedCard.imageSource);
  }, [selectedCard]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "productName":
        setNewProductName(value);
        onModifyProduct({ ...selectedCard, title: value });
        break;
      case "productPrice":
        setNewProductPrice(value);
        onModifyProduct({ ...selectedCard, price: value });
        break;
      case "productImage":
        setNewProductImage(value);
        setPreviewImage(value);
        onModifyProduct({ ...selectedCard, imageSource: value });
        break;
      default:
        break;
    }
  };

  return (
    <FormContainer>
      <Image src={previewImage}></Image>
      <Product>
        <DivInput>
          <GiCupcake className="icon" />
          <input
            type="text"
            name="productName"
            value={newProductName}
            onChange={handleInputChange}
            placeholder={selectedCard.title}
          />
        </DivInput>
        <DivInput>
          <BsFillCameraFill className="icon" />
          <input
            type="text"
            name="productPrice"
            value={newProductPrice}
            onChange={handleInputChange}
            placeholder={selectedCard.price}
          />
        </DivInput>
        <DivInput>
          <MdOutlineEuro className="icon" />
          <input
            type="text"
            name="productImage"
            value={newProductImage}
            onChange={handleInputChange}
            placeholder={selectedCard.imageSource}
          />
        </DivInput>
        <p>Cliquez sur un produit pour le modifier en temps réel</p>
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
  width: 22%;
  height: 22%;
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
