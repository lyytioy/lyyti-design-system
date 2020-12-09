import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyRage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-rage_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-rage_svg__a"
      d="M3.685 17.894a1.4 1.4 0 10-1.261 2.469 1.39 1.39 0 101.963 1.963 1.4 1.4 0 102.469-1.261l3.194-5.475a.651.651 0 00-.89-.89zM1.177 15.08a11.25 11.25 0 1121.688-.151M14.37 23a11.365 11.365 0 01-4.76 0M6 11.2a1.8 1.8 0 003 0M15 11.2a1.8 1.8 0 003 0M9 8.25l-3.75-1.5M15 8.25l3.75-1.5"
    />,
    <path
      className="smiley-rage_svg__a"
      d="M20.315 17.894a1.386 1.386 0 01.785-.242 1.4 1.4 0 01.476 2.711 1.39 1.39 0 11-1.963 1.963 1.4 1.4 0 11-2.47-1.261L13.95 15.59a.651.651 0 01.89-.89z"
    />
  );

export default SvgSmileyRage;
