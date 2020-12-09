import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTurntable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".turntable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="turntable_svg__a"
      x={2.5}
      y={0.5}
      width={19}
      height={23}
      rx={2}
      ry={2}
    />,
    <circle className="turntable_svg__a" cx={12} cy={10} r={6.5} />,
    <path
      className="turntable_svg__a"
      d="M9 14l-3.5 3.5M11.5 20.6a.9.9 0 01-.9.9H6.5a1 1 0 01-1-1v-3l5.446 2.269a.9.9 0 01.554.831zM18.25 20a.25.25 0 10.25.25.25.25 0 00-.25-.25M13.5 10a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0112 8.5a1.5 1.5 0 011.5 1.5z"
    />
  );

export default SvgTurntable;
