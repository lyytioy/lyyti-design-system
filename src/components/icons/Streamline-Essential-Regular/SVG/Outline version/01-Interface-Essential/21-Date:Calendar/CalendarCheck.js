import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendarCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 24A2.252 2.252 0 010 21.75V5.25A2.252 2.252 0 012.25 3H6V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75A2.252 2.252 0 0124 5.25v16.5A2.252 2.252 0 0121.75 24H2.25zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zM22.5 9V5.25a.75.75 0 00-.75-.75H18V6a.75.75 0 01-1.5 0V4.5h-9V6A.75.75 0 016 6V4.5H2.25a.75.75 0 00-.75.75V9h21z" />,
    <path d="M11.25 20.25a.743.743 0 01-.53-.22l-3-3a.752.752 0 01.53-1.281c.2 0 .389.078.53.22l2.389 2.389 3.981-5.309a.754.754 0 01.6-.3.75.75 0 01.599 1.2l-4.5 6a.75.75 0 01-.599.301z" />
  );

export default SvgCalendarCheck;
