import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="love-it-remove_svg__a" cx={17.247} cy={17.25} r={6} />,
    <path
      className="love-it-remove_svg__a"
      d="M19.497 15l-4.5 4.5M14.997 15l4.5 4.5M8.223 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.678 5.678 0 0122.632 9"
    />
  );

export default SvgLoveItRemove;
