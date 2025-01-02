import { createContext, useState, useContext } from "react";

// Cria o contexto
const CartContext = createContext();

// Provedor do contexto
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  function addToCart(item, quantity, total) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        // Atualiza a quantidade e o total do item existente
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
        // Adiciona um novo item ao carrinho
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
              total: cartItem.total + cartItem.price, // Atualiza o total
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
              total: cartItem.total - cartItem.price, // Atualiza o total
            }
          : cartItem
      )
    );
  }

  // Calcula o total do carrinho
  const cartTotal = cartItems.reduce((total, item) => total + item.total, 0);

  function setPayment(payment) {
    setPaymentMethod(payment);
  }
  function handleButtonClick(event, method) {
    event.preventDefault(); // Impede o comportamento padrão
    setPayment(method);
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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto
export function useCart() {
  return useContext(CartContext);
}
