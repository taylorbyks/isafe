import React, { useState } from "react";

import { HomeContainer } from "./styles";
import { Title, LoadAnimation } from "../../components";

export const Home = () => {
  const [ loading, setLoading ] = useState(true)

  if(loading){
    return <LoadAnimation />
  }
  return (
    <HomeContainer>
      <Title>Pagina de mapa</Title>
    </HomeContainer>
  );
};
