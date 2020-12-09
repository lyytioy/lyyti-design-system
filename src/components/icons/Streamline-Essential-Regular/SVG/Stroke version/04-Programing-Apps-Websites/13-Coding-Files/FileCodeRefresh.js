import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code-refresh_svg__a"
      d="M19.5 15.754h3.75v-4.5M23.061 15.754A6 6 0 1021.94 21"
    />,
    <path
      className="file-code-refresh_svg__a"
      d="M8.25 20.254h-6a1.5 1.5 0 01-1.5-1.5v-16.5a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.061.439l2.871 2.871a1.5 1.5 0 01.439 1.061v3.129"
    />,
    <rect
      className="file-code-refresh_svg__a"
      x={6.75}
      y={5.254}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="file-code-refresh_svg__a"
      d="M3.75 5.254v4.5M12.75 5.254v4.5"
    />,
    <rect
      className="file-code-refresh_svg__a"
      x={3.75}
      y={12.754}
      width={3}
      height={4.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgFileCodeRefresh;
