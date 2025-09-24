import React from "react";
import SectionEight from "../Components/SectionEight";
import HeadingInOther from "../Components/HeadingInOther";
import AllOtherPages from "../Components/AllOtherPages";
import ContactUs from "../Components/ContactUs";

export default function Contact() {
  return (
    <div>
      <AllOtherPages heading={"Contact Us"} lastLi={"Contact"}/>
      <ContactUs/>
    </div>
  );
}
