import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M4.5 24A2.503 2.503 0 012 21.5v-19C2 1.121 3.121 0 4.5 0h15C20.878 0 22 1.121 22 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-15zM3 21.5c0 .827.673 1.5 1.5 1.5h15c.827 0 1.5-.673 1.5-1.5V16h-2v1a1 1 0 01-1 1H6c-.551 0-1-.448-1-1v-1H3v5.5zM6 17h12V3H6v14zm15-2v-2h-2l2 2zM5 15v-2H3v2h2zm16-3v-2h-2v2h2zM5 12v-2H3v2h2zm16-3V2.5c0-.827-.673-1.5-1.5-1.5h-15C3.673 1 3 1.673 3 2.5V9h2V3c0-.551.449-1 1-1h12c.552 0 1 .449 1 1v6h2z" />,
    <path d="M11 22c-.551 0-1-.448-1-1v-1c0-.552.449-1 1-1h2a1 1 0 011 1v1a1 1 0 01-1 1h-2zm0-1h2v-1h-2v1zM9 7a.5.5 0 010-1h6a.5.5 0 010 1H9zM9 10a.5.5 0 010-1h6a.5.5 0 010 1H9zM9 13a.5.5 0 010-1h4a.5.5 0 010 1H9z" />,
    <circle cx={8.25} cy={20.5} r={0.75} />,
    <circle cx={15.75} cy={20.5} r={0.75} />
  );

export default SvgKindle;
