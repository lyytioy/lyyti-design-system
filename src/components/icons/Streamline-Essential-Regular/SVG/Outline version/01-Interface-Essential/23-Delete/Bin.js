import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.75 17.25A.75.75 0 019 16.5v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75zM14.25 17.25a.75.75 0 01-.75-.75v-6a.75.75 0 011.5 0v6a.75.75 0 01-.75.75z" />,
    <path d="M6.75 21.75A2.252 2.252 0 014.5 19.5V6.75H2.25a.75.75 0 010-1.5H7.5V4.5a2.252 2.252 0 012.25-2.25h4.5A2.252 2.252 0 0116.5 4.5v.75h5.25a.75.75 0 010 1.5H19.5V19.5a2.252 2.252 0 01-2.25 2.25H6.75zM6 19.5c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75V6.75H6V19.5zm9-14.25V4.5a.75.75 0 00-.75-.75h-4.5A.75.75 0 009 4.5v.75h6z" />
  );

export default SvgBin;
