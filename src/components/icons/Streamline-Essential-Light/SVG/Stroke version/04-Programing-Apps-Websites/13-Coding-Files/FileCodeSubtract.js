import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-subtract_svg__a"
      d="M10.5 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.708V9.5M3.5 5.503v4M12.5 5.503v4M9.5 12.503v4M15.5 5.503v4"
    />,
    <path
      className="file-code-subtract_svg__a"
      d="M8 5.5A1.5 1.5 0 019.5 7v1a1.5 1.5 0 01-3 0V7A1.5 1.5 0 018 5.5zM5 12.5A1.5 1.5 0 016.5 14v1a1.5 1.5 0 01-3 0v-1A1.5 1.5 0 015 12.5z"
    />,
    <circle
      className="file-code-subtract_svg__a"
      cx={17.531}
      cy={17.503}
      r={6}
    />,
    <path className="file-code-subtract_svg__a" d="M20.531 17.503h-6" />
  );

export default SvgFileCodeSubtract;
