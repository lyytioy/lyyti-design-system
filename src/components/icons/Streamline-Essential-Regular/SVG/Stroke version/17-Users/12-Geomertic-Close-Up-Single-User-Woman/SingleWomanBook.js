import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-book_svg__cls-1"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H19.5a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5zM19.5 23.25v-4.5"
    />,
    <path
      className="single-woman-book_svg__cls-1"
      d="M16.224 15a4.513 4.513 0 00-2.383-2.591L12 15.75l-1.841-3.341A4.518 4.518 0 007.775 15"
    />,
    <circle className="single-woman-book_svg__cls-1" cx={12} cy={7.5} r={3} />,
    <path
      className="single-woman-book_svg__cls-1"
      d="M9 7.5s0 3.75-2.25 3.75M15 7.5s0 3.75 2.25 3.75"
    />
  );

export default SvgSingleWomanBook;
