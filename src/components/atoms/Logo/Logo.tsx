import React from "react";
import { Logo as LogoData } from "../../../assets";

const Logo: React.FC = () => {
  console.log(LogoData);
  return <img src={LogoData.src} alt="Logo" />;
};

export default Logo;
