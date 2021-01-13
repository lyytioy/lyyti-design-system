import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.25 24A2.252 2.252 0 016 21.75v-10.5A2.252 2.252 0 018.25 9h2.25V6c0-2.481-2.019-4.5-4.5-4.5S1.5 3.519 1.5 6v3.75a.75.75 0 01-1.5 0V6c0-3.308 2.692-6 6-6s6 2.692 6 6v3h9.75A2.252 2.252 0 0124 11.25v10.5A2.252 2.252 0 0121.75 24H8.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H8.25z" />,
    <path d="M15 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" />
  );

export default SvgLockUnlock;