import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPortablePlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.75 17A3.25 3.25 0 1012 13.75 3.254 3.254 0 008.75 17zm4.75 0a1.5 1.5 0 11-1.5-1.5 1.5 1.5 0 011.5 1.5z" />,
    <path d="M17.5 0h-11A2.5 2.5 0 004 2.5v19A2.5 2.5 0 006.5 24h11a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0017.5 0zm.5 9.531a.986.986 0 01-1 .969H7a.986.986 0 01-1-.969V2.969A.986.986 0 017 2h10a.986.986 0 011 .969zM16.75 17A4.75 4.75 0 1112 12.25 4.756 4.756 0 0116.75 17z" />
  );

export default SvgPortablePlayer;
