import React from "react";
import * as logo from "../../../assets/index";

type Props = {
  height?: number;
};

const Logo: React.FC<Props> = ({ height }) => {
  return <img src={logo.Logo.src} height={height} alt="Logo" />;
};

export default Logo;
