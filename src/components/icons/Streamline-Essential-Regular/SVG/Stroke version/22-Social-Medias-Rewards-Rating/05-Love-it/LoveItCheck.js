import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-check_svg__a"
      d="M23.247 17.25a6 6 0 11-6-6M23.247 12.75l-5.469 5.469a.75.75 0 01-1.061 0L15 16.5"
    />,
    <path
      className="love-it-check_svg__a"
      d="M8.223 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.678 5.678 0 0122.632 9"
    />
  );

export default SvgLoveItCheck;
