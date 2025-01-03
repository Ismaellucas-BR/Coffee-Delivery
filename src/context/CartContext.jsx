import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate(); // Use o hook useNavigate aqui

  function addToCart(item, quantity, total) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? {
                ...cartItem,
                quantity: cartItem.quantity + quantity,
                total: cartItem.total + total,
              }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity, total }];
      }
    });
  }

  function removeFromCart(itemName) {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== itemName)
    );
  }

  function increaseQuantity(itemName) {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === itemName && cartItem.quantity < 15
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              total: cartItem.total + cartItem.price,
            }
          : cartItem
      )
    );
  }

  function decreaseQuantity(itemName) {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.name === itemName && cartItem.quantity > 1
          ? {
              ...cartItem,
              quantity: cartItem.quantity - 1,
              total: cartItem.total - cartItem.price,
            }
          : cartItem
      )
    );
  }

  const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);

  function setPayment(payment) {
    setPaymentMethod(payment);
  }

  function handleButtonClick(event, method) {
    event.preventDefault();
    setPayment(method);
  }

  function submitForm(data) {
    setFormData(data);
    console.log("Dados enviados:", formData);
    navigate("/order_confirmed"); // Use navigate aqui para redirecionar
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        cartTotal,
        setPayment,
        handleButtonClick,
        submitForm,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
