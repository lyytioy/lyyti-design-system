import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.252 24a2.252 2.252 0 01-2.25-2.25V5.25A2.252 2.252 0 012.252 3h3.75V.75a.75.75 0 011.5 0V3h9V.75a.75.75 0 011.5 0V3h3.75a2.252 2.252 0 012.25 2.25v16.5a2.252 2.252 0 01-2.25 2.25h-19.5zm-.75-2.25c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75V10.5h-21v11.25zm21-12.75V5.25a.75.75 0 00-.75-.75h-3.75V6a.75.75 0 01-1.5 0V4.5h-9V6a.75.75 0 01-1.5 0V4.5h-3.75a.75.75 0 00-.75.75V9h21z" />
  );

export default SvgCalendar;
