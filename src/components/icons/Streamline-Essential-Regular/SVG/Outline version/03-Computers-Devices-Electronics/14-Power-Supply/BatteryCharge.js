import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBatteryCharge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 15.75A2.252 2.252 0 010 13.5v-9a2.252 2.252 0 012.25-2.25h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 00-.75.75v9c0 .414.336.75.75.75h4.5a.75.75 0 010 1.5h-4.5zM15.75 15.75a.75.75 0 010-1.5h3a.75.75 0 00.75-.75V12a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-1.5A.75.75 0 0119.5 6V4.5a.75.75 0 00-.75-.75h-3a.75.75 0 010-1.5h3A2.252 2.252 0 0121 4.5v.75h.75A2.252 2.252 0 0124 7.5v3a2.252 2.252 0 01-2.25 2.25H21v.75a2.252 2.252 0 01-2.25 2.25h-3z" />,
    <path d="M11.25 21.75a.75.75 0 01-.75-.75v-6.827a3.743 3.743 0 01-3-3.673V9c0-.96.615-1.808 1.5-2.121V4.5a.75.75 0 011.5 0v2.25H12V4.5a.75.75 0 011.5 0v2.379A2.258 2.258 0 0115 9v1.5a3.743 3.743 0 01-3 3.673V21a.75.75 0 01-.75.75zm-1.5-13.5A.75.75 0 009 9v1.5a2.252 2.252 0 002.25 2.25 2.252 2.252 0 002.25-2.25V9a.75.75 0 00-.75-.75h-3z" />
  );

export default SvgBatteryCharge;