import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="subtract-circle_svg__a" d="M7.5 12h9" />,
    <circle className="subtract-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgSubtractCircle;
