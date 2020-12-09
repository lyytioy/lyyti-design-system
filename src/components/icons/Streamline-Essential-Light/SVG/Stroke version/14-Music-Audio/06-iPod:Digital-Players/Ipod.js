import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIpod = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ipod_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ipod_svg__a"
      x={0.5}
      y={5.5}
      width={12}
      height={17}
      rx={2}
      ry={2}
    />,
    <rect
      className="ipod_svg__a"
      x={2.5}
      y={8.5}
      width={8}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <circle className="ipod_svg__a" cx={6.5} cy={17.5} r={3} />,
    <path
      className="ipod_svg__a"
      d="M6.5 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M9.5 5.5V3A1.5 1.5 0 0111 1.5h10.5a2 2 0 010 4h-4a2 2 0 000 4h4a2 2 0 010 4h-3a2 2 0 00-2 2v2M18.902 20.5H15.5v-3h3.401"
    />,
    <path
      className="ipod_svg__a"
      d="M21.5 21.45a.5.5 0 01-.6.49 3 3 0 010-5.88.5.5 0 01.6.49z"
    />
  );

export default SvgIpod;
