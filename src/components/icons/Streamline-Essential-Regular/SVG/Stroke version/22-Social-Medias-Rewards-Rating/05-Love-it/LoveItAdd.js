import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="love-it-add_svg__a" cx={17.254} cy={17.25} r={6} />,
    <path
      className="love-it-add_svg__a"
      d="M17.254 14.25v6M14.254 17.25h6M8.219 16.5l-5.811-6.065a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.675 5.675 0 0122.628 9"
    />
  );

export default SvgLoveItAdd;
