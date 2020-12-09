import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoPlusMinus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-plus-minus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arduino-plus-minus-1_svg__a"
      d="M12 12s1.35 3.15 3.6 3.15a3.15 3.15 0 100-6.3C13.35 8.85 12 12 12 12zM12 12s-1.35 3.15-3.6 3.15a3.15 3.15 0 110-6.3C10.65 8.85 12 12 12 12z"
    />,
    <path
      className="arduino-plus-minus-1_svg__a"
      d="M20.25 18.75h-18a1.5 1.5 0 01-1.5-1.5V6.75a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v1.5l1.5.75v6l-1.5.75v1.5a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgArduinoPlusMinus1;
