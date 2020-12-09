import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="subtract-circle_svg__a" cx={12} cy={12} r={11} />,
    <path className="subtract-circle_svg__a" d="M18 12H6" />
  );

export default SvgSubtractCircle;
