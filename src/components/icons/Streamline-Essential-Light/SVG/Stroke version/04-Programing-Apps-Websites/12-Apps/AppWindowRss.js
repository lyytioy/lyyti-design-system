import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowRss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-rss_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-rss_svg__a"
      x={0.5}
      y={2.004}
      width={23}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="app-window-rss_svg__a"
      d="M.5 7.004h23M4 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M10 4.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M8.511 18.254a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.511 13.648a5.856 5.856 0 015.856 5.852M7.511 10.014A9.49 9.49 0 0117 19.5"
    />
  );

export default SvgAppWindowRss;
