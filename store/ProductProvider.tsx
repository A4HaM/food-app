import React, { useState } from "react";
import AppContext from "./AppContext";

const ProductProvider = (props: any) => {
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default ProductProvider;
