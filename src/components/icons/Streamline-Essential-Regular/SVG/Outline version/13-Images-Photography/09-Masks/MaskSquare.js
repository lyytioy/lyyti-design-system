import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.75 24C.785 24 0 23.215 0 22.25V1.75C0 .785.785 0 1.75 0h20.5C23.215 0 24 .785 24 1.75v20.5c0 .965-.785 1.75-1.75 1.75H1.75zm0-22.5a.25.25 0 00-.25.25v20.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25H1.75z" />,
    <path d="M5.75 19.5c-.689 0-1.25-.561-1.25-1.25V5.75c0-.689.561-1.25 1.25-1.25h12.5c.689 0 1.25.561 1.25 1.25v12.5c0 .689-.561 1.25-1.25 1.25H5.75zM18 18V6H6v12h12z" />
  );

export default SvgMaskSquare;
