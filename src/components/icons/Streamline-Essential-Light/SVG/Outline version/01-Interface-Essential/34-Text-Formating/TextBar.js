import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16 24a4.517 4.517 0 01-4-2.439A4.518 4.518 0 018 24H6.5a.5.5 0 010-1H8c1.93 0 3.5-1.57 3.5-3.5v-3.502h-2a.5.5 0 010-1h2V4.5C11.5 2.57 9.93 1 8 1H6.5a.5.5 0 010-1H8c1.693 0 3.235.96 4 2.439A4.517 4.517 0 0116 0h1.5a.5.5 0 010 1H16c-1.93 0-3.5 1.57-3.5 3.5v10.498h2a.5.5 0 010 1h-2V19.5c0 1.93 1.57 3.5 3.5 3.5h1.5a.5.5 0 010 1H16z" />
  );

export default SvgTextBar;
