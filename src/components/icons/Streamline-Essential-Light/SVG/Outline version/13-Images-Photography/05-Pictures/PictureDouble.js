import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 16.5c-1.103 0-2-1.122-2-2.5V5a2.512 2.512 0 012.499-2.5H16.5c1.378 0 2.5.897 2.5 2V6a.5.5 0 01-1 0V4.5c0-.533-.701-1-1.5-1h-14A1.51 1.51 0 001 5.001V14c0 .799.467 1.5 1 1.5h1.5a.5.5 0 010 1H2z" />,
    <path d="M3 14.5c-.551 0-1-.448-1-1v-8c0-.551.449-1 1-1h13c.552 0 1 .449 1 1V6a.5.5 0 01-1 0v-.5H3v8h.5a.5.5 0 010 1H3z" />,
    <path d="M7.5 21.5A2.503 2.503 0 015 19v-9c0-1.379 1.121-2.5 2.5-2.5h14c1.378 0 2.5 1.121 2.5 2.5v9c0 1.378-1.122 2.5-2.5 2.5h-14zm0-13C6.673 8.5 6 9.173 6 10v9c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5v-9c0-.827-.673-1.5-1.5-1.5h-14z" />,
    <path d="M8 19.5c-.551 0-1-.448-1-1v-8c0-.551.449-1 1-1h13c.552 0 1 .449 1 1v8a1 1 0 01-1 1H8zm0-1h13v-8H8v8z" />
  );

export default SvgPictureDouble;
