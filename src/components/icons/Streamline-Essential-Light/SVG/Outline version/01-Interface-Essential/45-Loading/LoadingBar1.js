import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingBar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22A2.503 2.503 0 010 19.5v-14C0 4.121 1.121 3 2.5 3h1.968a.324.324 0 01.061 0h3.939a.324.324 0 01.061 0H21.5C22.878 3 24 4.121 24 5.5v14c0 1.378-1.122 2.5-2.5 2.5h-19zM1 19.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.998H1V19.5zM23 7.998V5.5c0-.827-.673-1.5-1.5-1.5H8.998v3.998H23zm-15.002 0V4h-3v3.998h3zm-4 0V4H2.5C1.673 4 1 4.673 1 5.5v2.498h2.998z" />,
    <path d="M6 18c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3H6zm12-1c1.103 0 2-.897 2-2s-.897-2-2-2h-2.797l-4 4H18zm-8.211 0l4-4h-3.086l-4 4h3.086zM6 13c-1.103 0-2 .897-2 2 0 .874.564 1.637 1.388 1.901L9.289 13H6z" />
  );

export default SvgLoadingBar1;
