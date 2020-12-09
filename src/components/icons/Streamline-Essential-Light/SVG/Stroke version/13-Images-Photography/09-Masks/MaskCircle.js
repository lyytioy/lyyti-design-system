import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-circle_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <circle className="mask-circle_svg__a" cx={12} cy={12} r={8} />
  );

export default SvgMaskCircle;
