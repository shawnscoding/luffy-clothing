import React from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => {
  // throw Error;
  // by uncommon throw error above, we can see what error page looks like
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
