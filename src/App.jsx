import { Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          {routes.map((item, index) => {
            return (
              <Route key={index} path={item.path} element={item.element} />
            );
          })}
        </Routes>
        <Footer />
      </UserProvider>
    </>
  );
}

export default App;
