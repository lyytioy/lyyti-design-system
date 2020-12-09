import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-badge_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h12M.76 5.253h21"
    />,
    <circle
      className="app-window-badge_svg__a"
      cx={19.51}
      cy={15.003}
      r={3.75}
    />,
    <path
      className="app-window-badge_svg__a"
      d="M21.76 18.001v5.252l-2.25-2.25-2.25 2.25v-5.252M19.51 14.628a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgAppWindowBadge;
