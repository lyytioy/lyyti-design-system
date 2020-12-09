import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.25 19.499A2.252 2.252 0 010 17.249v-10.5a2.252 2.252 0 012.25-2.25h19.5A2.252 2.252 0 0124 6.749v10.5a2.252 2.252 0 01-2.25 2.25H2.25zm0-13.5a.75.75 0 00-.75.75v10.5c0 .414.336.75.75.75h19.5a.75.75 0 00.75-.75v-10.5a.75.75 0 00-.75-.75H2.25z" />,
    <path d="M5.25 16.499a.75.75 0 010-1.5H6v-6h-.75a.75.75 0 010-1.5h3a.75.75 0 010 1.5H7.5v6h.75a.75.75 0 010 1.5h-3z" />
  );

export default SvgTyping;
