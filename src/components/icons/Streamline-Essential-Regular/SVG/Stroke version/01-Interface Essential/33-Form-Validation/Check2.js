import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheck2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-2_svg__a"
      d="M6 13.223L8.45 16.7a1.049 1.049 0 001.707.051L18 6.828"
    />,
    <rect
      className="check-2_svg__a"
      x={0.75}
      y={0.749}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgCheck2;
