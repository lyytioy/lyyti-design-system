import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-home_svg__a"
      d="M12.5 16.311V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.189"
    />,
    <path
      className="file-code-home_svg__a"
      d="M10.5 18l5.854-4.954a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />,
    <path
      className="file-code-home_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V9.5M3.5 5.504v4M12.5 5.504v4M9.5 12.504v2.5M15.5 5.504v4"
    />,
    <path
      className="file-code-home_svg__a"
      d="M8 5.5A1.5 1.5 0 019.5 7v1a1.5 1.5 0 01-3 0V7A1.5 1.5 0 018 5.5zM5 12.5A1.5 1.5 0 016.5 14v1a1.5 1.5 0 01-3 0v-1A1.5 1.5 0 015 12.5z"
    />
  );

export default SvgFileCodeHome;
