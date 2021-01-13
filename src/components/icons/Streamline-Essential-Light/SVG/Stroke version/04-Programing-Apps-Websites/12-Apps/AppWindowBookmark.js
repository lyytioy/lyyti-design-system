import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-bookmark_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-bookmark_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M19.5 14.569a.5.5 0 01-.777.416L16.5 13.5l-2.223 1.481a.5.5 0 01-.777-.416V7h6z"
    />
  );

export default SvgAppWindowBookmark;