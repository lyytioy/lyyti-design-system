import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin1Alternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-1-alternate_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bin-1-alternate_svg__a"
      d="M16.71 21.246a1.5 1.5 0 01-1.48 1.254H8.772a1.5 1.5 0 01-1.48-1.254L4.5 4.5h15zM1.501 4.5h21M14.251 1.5h-4.5a1.5 1.5 0 00-1.5 1.5v1.5h7.5V3a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgBin1Alternate;
