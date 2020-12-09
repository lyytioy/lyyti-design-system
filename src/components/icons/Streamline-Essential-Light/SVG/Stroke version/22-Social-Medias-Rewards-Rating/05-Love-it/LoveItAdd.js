import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-add_svg__a"
      d="M9.664 18.844L2.2 11.157A5.669 5.669 0 011.112 4.55 5.84 5.84 0 0110.4 3.063L12 4.522l1.6-1.459a5.84 5.84 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle className="love-it-add_svg__a" cx={17.5} cy={15.75} r={6} />,
    <path className="love-it-add_svg__a" d="M17.5 12.75v6M20.5 15.75h-6" />
  );

export default SvgLoveItAdd;
