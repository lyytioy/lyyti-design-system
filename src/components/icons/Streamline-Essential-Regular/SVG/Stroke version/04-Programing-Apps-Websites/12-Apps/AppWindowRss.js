import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowRss = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-rss_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-rss_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-rss_svg__a"
      d="M1.51 6.753h21M8.26 17.628a.375.375 0 11-.375.372.375.375 0 01.375-.375M7.51 9.753a9 9 0 019 9M7.51 13.5a5.25 5.25 0 015.25 5.25"
    />
  );

export default SvgAppWindowRss;
