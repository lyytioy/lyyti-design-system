import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3.25 13.25a1 1 0 01-1-1v-6a1 1 0 011-1h11a1 1 0 01.98.8.25.25 0 00.245.2H17a.25.25 0 00.25-.25v-.75a2 2 0 00-2-2h-13a2 2 0 00-2 2v8a2 2 0 002 2H4a.25.25 0 00.25-.25v-1.5a.25.25 0 00-.25-.25z" />,
    <path d="M21.25 7.75h-13a2.5 2.5 0 00-2.5 2.5v8a2.5 2.5 0 002.5 2.5h13a2.5 2.5 0 002.5-2.5v-8a2.5 2.5 0 00-2.5-2.5zm-13 9.5v-6a1 1 0 011-1h11a1 1 0 011 1v6a1 1 0 01-1 1h-11a1 1 0 01-1-1z" />
  );

export default SvgPictureDouble;
