import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheck2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="check-2_svg__a" d="M18 6.999l-7 9.5-5-4" />,
    <rect
      className="check-2_svg__a"
      x={0.5}
      y={0.499}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgCheck2;
