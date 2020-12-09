import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAirplaneMode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".airplane-mode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="airplane-mode_svg__a"
      d="M.5 23.5l23-23M14.508 6.664l-.008-.008V3a2.5 2.5 0 00-5 0v3.656L1.177 14A2 2 0 002.5 17.5c.593 0 .823-.1 2.365-1.194M9.5 17.328v2.109l-1.539 1.484A1.5 1.5 0 009 23.5c1 0 3-1.5 3-1.5s2 1.5 3 1.5a1.5 1.5 0 001.039-2.579L14.5 19.437V13c6.036 4.253 6.045 4.5 7 4.5a2 2 0 001.323-3.5l-5.31-4.685"
    />
  );

export default SvgAirplaneMode;
