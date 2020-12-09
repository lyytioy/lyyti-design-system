import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-clock_svg__a"
      d="M23.164 16.305a6 6 0 11-4.979-4.979 6.007 6.007 0 014.979 4.979z"
    />,
    <path
      className="file-code-clock_svg__a"
      d="M19.888 17.254h-2.651v-2.652M8.237 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.628a1.5 1.5 0 011.061.439L16.8 4.064a1.5 1.5 0 01.44 1.061v3.129"
    />,
    <rect
      className="file-code-clock_svg__a"
      x={6.737}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-clock_svg__a"
      d="M3.737 5.254v4.5M12.737 5.254v4.5"
    />,
    <rect
      className="file-code-clock_svg__a"
      x={3.737}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeClock;
