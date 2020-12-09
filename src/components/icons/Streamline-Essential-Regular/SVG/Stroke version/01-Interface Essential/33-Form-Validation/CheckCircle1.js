import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckCircle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-circle-1_svg__a"
      d="M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828"
    />,
    <circle className="check-circle-1_svg__a" cx={12} cy={11.999} r={11.25} />
  );

export default SvgCheckCircle1;
