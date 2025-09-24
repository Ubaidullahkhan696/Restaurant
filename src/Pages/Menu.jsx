import React from "react";
import SectionEight from "../Components/SectionEight";
import SectionFour from "../Components/SectionFour";
import AllOtherPages from "../Components/AllOtherPages";


const Menu = () => {
  return (
    <>
      <AllOtherPages heading={"Food Menu"} lastLi={"Menu"}/>
      <SectionFour/>

    </>
  );
};

export default Menu;
