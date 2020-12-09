import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskOval = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-oval_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mask-oval_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <ellipse className="mask-oval_svg__a" cx={12} cy={12} rx={5.25} ry={7.5} />
  );

export default SvgMaskOval;
