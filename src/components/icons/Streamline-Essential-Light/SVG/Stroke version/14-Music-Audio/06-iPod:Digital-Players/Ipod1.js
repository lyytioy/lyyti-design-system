import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIpod1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ipod-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ipod-1_svg__a"
      x={0.5}
      y={6.5}
      width={10}
      height={17}
      rx={1}
      ry={1}
    />,
    <circle className="ipod-1_svg__a" cx={5.5} cy={18.5} r={3} />,
    <rect
      className="ipod-1_svg__a"
      x={2.5}
      y={8.5}
      width={6}
      height={5}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="ipod-1_svg__a"
      d="M5.5 6.5v-2a4 4 0 018 0v16a3 3 0 006 0v-4"
    />,
    <path
      className="ipod-1_svg__a"
      d="M20.5 16.5h-2a1 1 0 010-2h2zM23.5 15.5a2 2 0 01-2 2 1 1 0 01-1-1v-2a1 1 0 011-1 2 2 0 012 2zM5.5 18.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgIpod1;
