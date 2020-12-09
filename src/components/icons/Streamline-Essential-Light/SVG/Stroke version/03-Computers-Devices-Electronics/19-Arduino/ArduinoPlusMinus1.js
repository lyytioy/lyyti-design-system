import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArduinoPlusMinus1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arduino-plus-minus-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arduino-plus-minus-1_svg__a"
      d="M1.5 2.5h19a1 1 0 011 1V8l1.6 1.2a1 1 0 01.4.8v6a1 1 0 01-.4.8L21.5 18v2.5a1 1 0 01-1 1h-19a1 1 0 01-1-1v-17a1 1 0 011-1z"
    />,
    <path
      className="arduino-plus-minus-1_svg__a"
      d="M11.375 12s-1.576 3.152-4.1 3.152A3.046 3.046 0 014.125 12a3.046 3.046 0 013.152-3.152C9.8 8.848 11.375 12 11.375 12z"
    />,
    <path
      className="arduino-plus-minus-1_svg__a"
      d="M18.625 12a3.046 3.046 0 01-3.152 3.152c-2.522 0-4.1-3.152-4.1-3.152s1.576-3.152 4.1-3.152A3.046 3.046 0 0118.625 12zM6.5 12h2M14.5 12h2M15.5 11v2"
    />
  );

export default SvgArduinoPlusMinus1;
