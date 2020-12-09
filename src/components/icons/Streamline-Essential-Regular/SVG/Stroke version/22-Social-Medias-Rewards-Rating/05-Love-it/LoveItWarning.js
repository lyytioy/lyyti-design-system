import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-warning_svg__a"
      d="M17.247 20.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.247 18v-3"
    />,
    <path
      className="love-it-warning_svg__a"
      d="M23.06 20.682a1.775 1.775 0 01-1.587 2.568h-8.451a1.774 1.774 0 01-1.587-2.568l4.226-8.451a1.773 1.773 0 013.173 0z"
    />,
    <path
      className="love-it-warning_svg__a"
      d="M8.223 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.678 5.678 0 0122.632 9"
    />
  );

export default SvgLoveItWarning;
