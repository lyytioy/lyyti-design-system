import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 24A2.503 2.503 0 010 21.5v-19C0 1.121 1.121 0 2.5 0h19C22.878 0 24 1.121 24 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-19zM1 21.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V6H1v15.5zM23 5V2.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 1 1 1.673 1 2.5V5h22z" />,
    <circle cx={4} cy={3} r={0.75} />,
    <circle cx={7} cy={3} r={0.75} />,
    <circle cx={10} cy={3} r={0.75} />,
    <path d="M4 12c-.551 0-1-.449-1-1V9c0-.551.449-1 1-1h16c.552 0 1 .449 1 1v2c0 .551-.448 1-1 1H4zm0-1h16V9H4v2zM4 21c-.551 0-1-.448-1-1v-6c0-.552.449-1 1-1h2c.551 0 1 .448 1 1v6c0 .552-.449 1-1 1H4zm0-1h2v-6H4v6zM9.5 15a.5.5 0 010-1h10a.5.5 0 010 1h-10zM9.5 17a.5.5 0 010-1h10a.5.5 0 010 1h-10zM9.5 19a.5.5 0 010-1h10a.5.5 0 010 1h-10zM9.5 21a.5.5 0 010-1h7a.5.5 0 010 1h-7z" />
  );

export default SvgBrowserPageText;
