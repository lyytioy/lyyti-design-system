import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGamingTrophyCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gaming-trophy-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gaming-trophy-check_svg__a"
      d="M16.5 4.06l-5.47 5.469a.749.749 0 01-1.06 0L8.25 7.81M11.996 15.749v3M18.361 23.249a6.751 6.751 0 00-12.73 0z"
    />,
    <path
      className="gaming-trophy-check_svg__a"
      d="M21.75 6a9.75 9.75 0 01-19.5 0V2.249a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgGamingTrophyCheck;
