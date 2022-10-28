import React from "react";
import About from "../../components/About";
import Campainns from "../../components/Campainns";
import Carosel from "../../components/Carosel";
import Customers from "../../components/customers/Customers";
import MenuWrappaer from "../../components/product/MenuWrappaer";
import Reservation from "../../components/Reservation";

const Index = () => {
    return (
      <React.Fragment>
          <Carosel />
          <Campainns />
          <MenuWrappaer />
          <About />
            <Reservation />
            <Customers />
        </React.Fragment>
    );
};

export default Index;
