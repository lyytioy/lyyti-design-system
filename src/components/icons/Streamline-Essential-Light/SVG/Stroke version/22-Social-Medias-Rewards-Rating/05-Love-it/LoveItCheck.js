import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-check_svg__a"
      d="M9.088 18.184L2.2 11.09a5.669 5.669 0 01-1.088-6.607A5.839 5.839 0 0110.4 3L12 4.455 13.6 3a5.839 5.839 0 019.287 1.487 5.655 5.655 0 01.192 4.7"
    />,
    <circle className="love-it-check_svg__a" cx={17.5} cy={16.182} r={6} />,
    <path
      className="love-it-check_svg__a"
      d="M20.174 14.438l-2.905 3.874a.75.75 0 01-1.13.08l-1.5-1.5"
    />
  );

export default SvgLoveItCheck;
