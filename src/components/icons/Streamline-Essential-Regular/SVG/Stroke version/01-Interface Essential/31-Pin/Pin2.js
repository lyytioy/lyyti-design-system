import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPin2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".pin-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="pin-2_svg__a" cx={17.25} cy={6.749} r={6} />,
    <path
      className="pin-2_svg__a"
      d="M14.25 7.5A3.75 3.75 0 0118 3.749M.75 23.249l12.258-12.258"
    />
  );

export default SvgPin2;
