import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserPageMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22A2.503 2.503 0 010 19.5v-15C0 3.121 1.121 2 2.5 2h19C22.878 2 24 3.121 24 4.5v15c0 1.378-1.122 2.5-2.5 2.5h-19zM1 19.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8H1v11.5zM23 7V4.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 3 1 3.673 1 4.5V7h22z" />,
    <circle cx={4} cy={5} r={0.75} />,
    <circle cx={7} cy={5} r={0.75} />,
    <circle cx={10} cy={5} r={0.75} />,
    <path d="M4 19c-.551 0-1-.448-1-1v-4c0-.552.449-1 1-1h5c.551 0 1 .448 1 1v4c0 .552-.449 1-1 1H4zm4.119-1L6.5 16.651 4.881 18h3.238zM9 17.433v-2.865L7.281 16 9 17.433zm-5 0L5.719 16 4 14.567v2.866zm2.5-2.084L8.119 14H4.881L6.5 15.349zM3.5 11a.5.5 0 010-1H17a.5.5 0 010 1H3.5zM12.5 14a.5.5 0 010-1h7a.5.5 0 010 1h-7zM12.5 17a.5.5 0 010-1h7a.5.5 0 010 1h-7z" />
  );

export default SvgBrowserPageMail;
