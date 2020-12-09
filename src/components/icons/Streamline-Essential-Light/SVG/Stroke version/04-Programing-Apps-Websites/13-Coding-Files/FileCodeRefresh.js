import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-refresh_svg__a"
      d="M20.016 17.498h3.5v-3.5M17.513 23.5a5.5 5.5 0 115.474-6"
    />,
    <path
      className="file-code-refresh_svg__a"
      d="M23.516 13.998v3.5h-3.5M10.516 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V9.5M3.516 5.504v4M12.516 5.504v4M9.516 12.504v4M15.516 5.504v4"
    />,
    <path
      className="file-code-refresh_svg__a"
      d="M8.016 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zM5.016 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeRefresh;
