import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSubtractCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".subtract-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="subtract-circle-bold_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <rect
      className="subtract-circle-bold_svg__a"
      x={5.25}
      y={9.75}
      width={13.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSubtractCircleBold;
