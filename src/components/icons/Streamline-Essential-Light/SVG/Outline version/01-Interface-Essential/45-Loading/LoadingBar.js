import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingBar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 22A2.503 2.503 0 010 19.5v-14C0 4.121 1.121 3 2.5 3h19C22.878 3 24 4.121 24 5.5v14c0 1.378-1.122 2.5-2.5 2.5h-19zM1 19.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V8.998H1V19.5zM23 7.998V5.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 4 1 4.673 1 5.5v2.498h22z" />,
    <path d="M4.25 6.5a.75.75 0 01-.75-.75c0-.387.292-.707.679-.744a.488.488 0 01.188.006.714.714 0 01.415.21A.75.75 0 014.25 6.5zM7.25 6.5a.75.75 0 110-1.5.75.75 0 010 1.5zM10.25 6.5a.75.75 0 01-.021-1.499l.032.25.006-.25A.748.748 0 0110.25 6.5zM6 18c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3H6zm12-1c1.103 0 2-.897 2-2s-.897-2-2-2h-3.202l-3.999 4H18zm-8.615 0l3.999-4h-1.586l-3.999 4h1.586zm-4.341-.246c.293.162.619.246.956.246h.385l3.999-4H8.798l-3.754 3.754zM6 13a1.998 1.998 0 00-1.687 3.071L7.384 13H6z" />
  );

export default SvgLoadingBar;