import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M18.409 15.131a.754.754 0 01-.4.119H6a.754.754 0 01-.4-.119l-5.215-3.35a.25.25 0 00-.385.21V22a2 2 0 002 2h20a2 2 0 002-2V11.993a.25.25 0 00-.385-.211z" />,
    <path d="M5.115 13.041a.25.25 0 00.385-.21V2.25A.25.25 0 015.75 2h12.5a.25.25 0 01.25.25v10.575a.25.25 0 00.385.211l4.063-2.608a.25.25 0 00.008-.416L20.5 8.3V2.206a2.114 2.114 0 00-2-2.208h-13a2.115 2.115 0 00-2 2.209V8.3l-2.458 1.71a.25.25 0 00.007.416z" />,
    <path d="M9.054 9.849l-1.478 2.388A.5.5 0 008 13h8.343a.5.5 0 00.46-.7l-1.45-3.373a1 1 0 00-1.587-.067L12.1 11l-1.773-1.357a1 1 0 00-1.273.206z" />,
    <circle cx={9.103} cy={5.5} r={1.5} />
  );

export default SvgEmailActionImage;
