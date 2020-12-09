import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus_svg__a"
      d="M17.5 5.982a8.181 8.181 0 013 6 8.2 8.2 0 01-3 6M6.5 5.982a8.181 8.181 0 00-3 6 8.2 8.2 0 003 6"
    />,
    <circle className="focus_svg__a" cx={12} cy={12} r={3} />,
    <rect
      className="focus_svg__a"
      x={0.5}
      y={1.5}
      width={23}
      height={21}
      rx={2}
      ry={2}
    />
  );

export default SvgFocus;
