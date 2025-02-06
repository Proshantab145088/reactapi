import React from "react";
import Image from "./Image";
import List from "./List";
import Flex from "./Flex";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div>
        <Image  src={`/vite.svg`} alt={`logo`} />
        <List />
      </div>
    </Container>
  );
};

export default Header;
