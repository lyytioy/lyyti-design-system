import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-home_svg__a"
      d="M12.75 15.951v5.8a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-5.8"
    />,
    <path
      className="file-code-home_svg__a"
      d="M11.25 17.264l4.519-3.954a2.25 2.25 0 012.963 0l4.518 3.954M18.75 23.254h-3v-3a1.5 1.5 0 013 0zM8.25 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l2.871 2.871a1.5 1.5 0 01.439 1.061v4.629"
    />,
    <rect
      className="file-code-home_svg__a"
      x={6.75}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-home_svg__a"
      d="M3.75 5.254v4.5M12.75 5.254v4.5"
    />,
    <rect
      className="file-code-home_svg__a"
      x={3.75}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeHome;
