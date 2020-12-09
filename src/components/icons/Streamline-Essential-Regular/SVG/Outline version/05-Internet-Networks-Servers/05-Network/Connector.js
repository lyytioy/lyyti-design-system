import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConnector = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5.25 19.875A2.252 2.252 0 013 17.625v-.75H.75a.75.75 0 010-1.5H3v-.75a2.252 2.252 0 012.25-2.25h3v-3a2.252 2.252 0 012.25-2.25h.75v-2.25a.75.75 0 011.5 0v2.25h.75a2.252 2.252 0 012.25 2.25v3h3a2.252 2.252 0 012.25 2.25v.75h2.25a.75.75 0 010 1.5H21v.75a2.252 2.252 0 01-2.25 2.25H5.25zm0-6a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75H15a.75.75 0 01-.75-.75v-3.75a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v3.75a.75.75 0 01-.75.75H5.25z" />
  );

export default SvgConnector;
