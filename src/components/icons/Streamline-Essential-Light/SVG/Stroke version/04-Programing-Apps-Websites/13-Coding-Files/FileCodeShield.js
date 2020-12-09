import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeShield = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-shield_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-shield_svg__a"
      d="M17.542 13.504v6M20.542 16.504h-6M18.077 23.4l.553-.21c2.63-1 4.912-3.524 4.912-6.339V13.46a1.044 1.044 0 00-.628-.958 15.824 15.824 0 00-5.394-1 15.528 15.528 0 00-5.351 1 1.044 1.044 0 00-.627.958v3.392c0 2.815 2.238 5.337 4.868 6.339l.553.21a1.561 1.561 0 001.114-.001z"
    />,
    <path
      className="file-code-shield_svg__a"
      d="M11.542 23.5h-10a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.542 5.504v4M12.542 5.504v4M9.542 12.504v4M15.542 5.504v4"
    />,
    <path
      className="file-code-shield_svg__a"
      d="M8.042 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zM5.042 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeShield;
