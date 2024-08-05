import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../api/contacts";
// Tạo context
const UserContext = createContext();

// Tạo provider component
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("user") != null ? true : false
  );
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("voucher");

    setIsLoggedIn(false);
    navigate("/login");
  };

  const addToCart = (item) => {
    // setCart([]);
    // return
    setCart((prevCart) => {
      const itemExists = prevCart.some(
        (cartItem) =>
          cartItem.course_id == item.course_id ||
          cartItem.class_id === item.class_id
      );

      if (!itemExists) {
        alert("Đã thêm");
        return [...prevCart, item];
      } else alert("Đã tồn tại trong giỏ hàng");
      return prevCart;
    });
  };

  const removeFromCart = (classId) => {
    setCart((prevCart) => prevCart.filter((item) => item.class_id !== classId));
  };

  const refreshToken = async () => {
    try {
      const response = await api.post(
        "auth/refresh",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        }
      );
      console.log(response);
      const newAuthToken = response.data.access_token;
      localStorage.setItem("authToken", newAuthToken);
    } catch (error) {
      console.error("Failed to refresh token", error);
      logout(); // Optionally, log the user out if refreshing token fails
    }
  };
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        refreshToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Định nghĩa hàm và xuất khẩu hàm đó dưới dạng default
export const useUserContext = () => useContext(UserContext);
