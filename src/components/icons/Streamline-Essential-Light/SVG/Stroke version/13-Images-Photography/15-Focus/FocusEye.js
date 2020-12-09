import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="focus-eye_svg__a"
      x={1}
      y={3}
      width={22}
      height={18}
      rx={1}
      ry={1}
    />,
    <path
      className="focus-eye_svg__a"
      d="M4 9V7a1 1 0 011-1h2M20 9V7a1 1 0 00-1-1h-2M4 15v2a1 1 0 001 1h2M20 15v2a1 1 0 01-1 1h-2"
    />,
    <circle className="focus-eye_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="focus-eye_svg__a"
      d="M17.825 11.552C17.178 10.846 14.815 8.5 12 8.5s-5.178 2.346-5.825 3.052a.661.661 0 000 .9c.647.702 3.01 3.048 5.825 3.048s5.178-2.346 5.825-3.052a.661.661 0 000-.9z"
    />
  );

export default SvgFocusEye;
