import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowSearchText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-search-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="app-window-search-text_svg__a"
      cx={15.76}
      cy={15.753}
      r={5.25}
    />,
    <path
      className="app-window-search-text_svg__a"
      d="M23.26 23.253l-3.788-3.787M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h7.5M.76 5.253h21M3.76 9.753h6M3.76 12.753h3M3.76 15.753h3"
    />
  );

export default SvgAppWindowSearchText;
