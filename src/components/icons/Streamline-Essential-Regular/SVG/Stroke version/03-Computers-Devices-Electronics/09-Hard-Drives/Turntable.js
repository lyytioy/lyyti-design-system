import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTurntable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".turntable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="turntable_svg__a"
      d="M7.2 13.5a6 6 0 117.749 1.408M11.879 9.375a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <rect
      className="turntable_svg__a"
      x={3}
      y={0.75}
      width={18}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="turntable_svg__a"
      d="M6.65 16.933a1.757 1.757 0 102.41 2.411l3.615-6.026zM18 19.5V18M15 19.5V18"
    />
  );

export default SvgTurntable;
