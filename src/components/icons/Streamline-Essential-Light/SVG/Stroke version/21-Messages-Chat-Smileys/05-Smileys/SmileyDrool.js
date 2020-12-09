import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyDrool = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-drool_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-drool_svg__a"
      d="M5.5 8a3.564 3.564 0 013-1.5M18.5 8a3.564 3.564 0 00-3-1.5M11.5 20.475a5 5 0 01-4.343-3.726 1 1 0 01.97-1.249h7.746a1 1 0 01.97 1.249 5 5 0 01-1.343 2.322"
    />,
    <path
      className="smiley-drool_svg__a"
      d="M12.371 18.886A1.148 1.148 0 0011.5 20v.5a1 1 0 002 0v2a1 1 0 002 0V18a.47.47 0 00-.754-.375 7.255 7.255 0 01-2.375 1.261zM17.5 22.1a11.522 11.522 0 10-6 1.374"
    />
  );

export default SvgSmileyDrool;
