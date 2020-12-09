import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="subtract-circle-bold_svg__a" cx={12} cy={12} r={11} />,
    <rect
      className="subtract-circle-bold_svg__a"
      x={5}
      y={10}
      width={14}
      height={4}
      rx={1}
      ry={1}
    />
  );

export default SvgSubtractCircleBold;
