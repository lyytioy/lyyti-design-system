import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".py-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="py-1_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="py-1_svg__a"
      d="M7.5 18.004v-7.5M7.5 10.5h.75a2.25 2.25 0 010 4.5H7.5M13.5 10.5v6A1.5 1.5 0 0015 18h1.5"
    />
  );

export default SvgPy1;
