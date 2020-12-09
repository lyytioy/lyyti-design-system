import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebsiteBuild = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={4} cy={4.5} r={0.75} />,
    <circle cx={7} cy={4.5} r={0.75} />,
    <circle cx={10} cy={4.5} r={0.75} />,
    <path d="M2.5 22.5A2.503 2.503 0 010 20V4c0-1.379 1.121-2.5 2.5-2.5H13c.552 0 1 .449 1 1v1h3V2a.5.5 0 011 0v1.5h3V2a.5.5 0 011 0v1.5h1.5a.5.5 0 010 1H22v3h1.5a.5.5 0 010 1H22v3h1c.552 0 1 .449 1 1V20c0 1.378-1.122 2.5-2.5 2.5h-19zM1 20c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5v-7.5h-8.5c-.827 0-1.5-.673-1.5-1.5V7.5H1V20zm20-8.5v-3h-3v3h3zm-7-.5a.5.5 0 00.5.5H17v-3h-3V11zm7-3.5v-3h-3v3h3zm-4 0v-3h-3v3h3zm-4-1v-4H2.5C1.673 2.5 1 3.173 1 4v2.5h12z" />
  );

export default SvgWebsiteBuild;
