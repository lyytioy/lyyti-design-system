import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookmarks = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bookmarks_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bookmarks_svg__a"
      d="M18.32 22.767L12 18.343l-6.32 4.424a.75.75 0 01-1.18-.614V2.593a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v19.56a.75.75 0 01-1.18.614zM9 1.094v19.349M15 1.094v19.349"
    />
  );

export default SvgBookmarks;
