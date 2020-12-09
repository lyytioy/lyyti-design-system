import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-book_svg__cls-1"
      d="M21 23.25H5.25A2.25 2.25 0 013 21M6 .75a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H19.5a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5zM19.5 23.25v-4.5"
    />,
    <circle
      className="single-neutral-book_svg__cls-1"
      cx={12}
      cy={7.875}
      r={2.625}
    />,
    <path
      className="single-neutral-book_svg__cls-1"
      d="M7.5 15.75a4.5 4.5 0 019 0"
    />
  );

export default SvgSingleNeutralBook;
