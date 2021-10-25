import React, { useState, useRef } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Burger from "../components/Navbar/Burger/Burger";
import { Container } from "./LayoutStyles";

//import the hook
import { useOnClickOutside } from "../Hooks/hook";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container>
      <div ref={node}>
        <Header open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
