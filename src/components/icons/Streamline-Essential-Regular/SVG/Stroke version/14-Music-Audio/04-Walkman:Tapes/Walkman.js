import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="walkman_svg__a"
      x={0.75}
      y={6}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="walkman_svg__a"
      d="M18.75 18a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5H14.5a1.5 1.5 0 00-1.248.668l-4 6A1.5 1.5 0 0010.5 18zM3.75 9h6M3.75 12h3M20.25 4.5a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5V6h9zM15.75 3v3"
    />,
    <circle className="walkman_svg__a" cx={15.75} cy={13.5} r={1.5} />
  );

export default SvgWalkman;
