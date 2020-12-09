import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-sync_svg__a"
      d="M15 18.504h-3.5v3.5M22.917 19.737A5.572 5.572 0 0112.1 18.5M20 16.504h3.5v-3.5M12.083 15.271A5.572 5.572 0 0122.9 16.5"
    />,
    <path
      className="file-code-sync_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.5 5.504v4M12.5 5.504v4M9.5 12.504v4M15.5 5.504v4"
    />,
    <path
      className="file-code-sync_svg__a"
      d="M8 5.5A1.5 1.5 0 019.5 7v1a1.5 1.5 0 01-3 0V7A1.5 1.5 0 018 5.5zM5 12.5A1.5 1.5 0 016.5 14v1a1.5 1.5 0 01-3 0v-1A1.5 1.5 0 015 12.5z"
    />
  );

export default SvgFileCodeSync;
