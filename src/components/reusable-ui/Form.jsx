import styled from "styled-components";
import { useState, useContext } from "react";
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import AdminContext from "../../context/AdminContext";

const Form = ({ onAddProduct }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImage, setNewProductImage] = useState("");
  const { list } = useContext(AdminContext);
  const handleAddProduct = () => {
    const newProduct = {
      id: list.length,
      imageSource: newProductImage || "../images/cupcake-item.png",
      title: newProductName || "New Product",
      price: newProductPrice || "0.00",
    };
    onAddProduct(newProduct);
    // Clear input fields after adding the product
    setNewProductName("New Product");
    setNewProductPrice("0.00");
    setNewProductImage("../images/cupcake-item.png");
  };

  return (
    <FormContainer>
      <Image src={newProductImage || "../images/cupcake-item.png"}></Image>
      <Product>
        <DivInput>
          <GiCupcake className="icon" />
          <input
            type="text"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            placeholder="New Product"
          />
        </DivInput>
        <DivInput>
          <BsFillCameraFill className="icon" />

          <input
            type="text"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            placeholder="0.00"
          />
        </DivInput>
        <DivInput>
          <MdOutlineEuro className="icon" />

          <input
            type="text"
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
            placeholder="../images/cupcake-item.png"
          />
        </DivInput>
        <button onClick={handleAddProduct}>Ajouter un nouveau produit</button>
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

  button {
    background-color: white;
    color: #59cb59;
    border: 1px solid #59cb59;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    &:hover {
      background-color: #59cb59;
      color: white;
    }
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
