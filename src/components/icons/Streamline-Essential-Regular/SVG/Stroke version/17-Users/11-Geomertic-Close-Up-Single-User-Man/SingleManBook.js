import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-book_svg__cls-1"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H19.5a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5zM19.5 23.25v-4.5"
    />,
    <circle
      className="single-man-book_svg__cls-1"
      cx={11.65}
      cy={7.875}
      r={3.375}
    />,
    <path
      className="single-man-book_svg__cls-1"
      d="M16.4 15a6.026 6.026 0 00-9.5 0M15.023 7.987a6.77 6.77 0 01-1.873.263 6.727 6.727 0 01-4.568-1.78"
    />
  );

export default SvgSingleManBook;
