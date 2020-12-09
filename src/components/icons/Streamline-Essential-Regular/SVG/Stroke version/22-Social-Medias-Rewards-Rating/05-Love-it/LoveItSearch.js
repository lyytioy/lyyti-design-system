import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="love-it-search_svg__a"
      cx={15.747}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="love-it-search_svg__a"
      d="M23.247 23.25l-3.787-3.788M7.507 15.75l-5.095-5.315a5.673 5.673 0 01-1.063-6.549 5.672 5.672 0 019.085-1.473L12 3.978l1.566-1.565a5.672 5.672 0 019.085 1.473A5.678 5.678 0 0122.632 9"
    />
  );

export default SvgLoveItSearch;
