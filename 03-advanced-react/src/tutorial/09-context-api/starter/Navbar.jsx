import React, { useState, createContext, useContext } from "react";
import Navlink from "./Navlink";

export const NavbarContext = createContext();
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: "Tega" });

  const Logout = () => setUser(null);

  return (
    <NavbarContext.Provider value={{ user: user, logout: Logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <Navlink />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
