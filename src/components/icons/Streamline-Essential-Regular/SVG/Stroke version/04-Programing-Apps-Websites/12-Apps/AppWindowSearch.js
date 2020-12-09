import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-search_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-search_svg__a" d="M1.51 6.753h21" />,
    <circle
      className="app-window-search_svg__a"
      cx={11.26}
      cy={13.503}
      r={3.75}
    />,
    <path className="app-window-search_svg__a" d="M16.51 18.753l-2.598-2.598" />
  );

export default SvgAppWindowSearch;
