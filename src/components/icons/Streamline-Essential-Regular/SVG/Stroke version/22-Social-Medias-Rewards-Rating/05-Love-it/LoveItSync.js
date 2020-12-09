import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-sync_svg__a"
      d="M14.997 18.75h-3.75v3.75M22.665 19.483a5.572 5.572 0 01-10.74-.733M19.497 15.75h3.75V12M11.83 15.017a5.572 5.572 0 0110.74.733"
    />,
    <path
      className="love-it-sync_svg__a"
      d="M8.223 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.678 5.678 0 0122.632 9"
    />
  );

export default SvgLoveItSync;
