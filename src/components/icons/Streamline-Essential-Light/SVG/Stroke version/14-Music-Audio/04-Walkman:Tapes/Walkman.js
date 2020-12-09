import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWalkman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".walkman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="walkman_svg__a"
      x={0.5}
      y={6}
      width={23}
      height={15}
      rx={1}
      ry={1}
    />,
    <path
      className="walkman_svg__a"
      d="M15.851 9.168A.5.5 0 0116.225 9H20a.5.5 0 01.5.5V16a2 2 0 01-2 2H9.113a.5.5 0 01-.373-.832z"
    />,
    <circle className="walkman_svg__a" cx={17} cy={13.5} r={1.5} />,
    <path
      className="walkman_svg__a"
      d="M3.5 9H11M3.5 12H8M9.5 4a1 1 0 011-1h10a1 1 0 011 1v2h-12zM17.5 3v3M13.5 3v3"
    />
  );

export default SvgWalkman;
