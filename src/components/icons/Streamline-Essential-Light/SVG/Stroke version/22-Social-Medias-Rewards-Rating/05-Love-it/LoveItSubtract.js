import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-subtract_svg__a"
      d="M9.586 18.763L2.2 11.158a5.669 5.669 0 01-1.088-6.607A5.839 5.839 0 0110.4 3.064L12 4.523l1.6-1.459a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle
      className="love-it-subtract_svg__a"
      cx={17.501}
      cy={15.749}
      r={6}
    />,
    <path className="love-it-subtract_svg__a" d="M20.501 15.749h-6" />
  );

export default SvgLoveItSubtract;
