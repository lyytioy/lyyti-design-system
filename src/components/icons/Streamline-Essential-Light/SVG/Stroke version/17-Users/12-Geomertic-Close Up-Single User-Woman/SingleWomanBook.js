import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-book_svg__cls-1"
      d="M20 .5H4.5a1.5 1.5 0 000 3h16a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H5a2 2 0 01-2-2V2"
    />,
    <g id="single-woman-book_svg___Group_" data-name="&lt;Group&gt;">
      <path
        className="single-woman-book_svg__cls-1"
        d="M7 20a5 5 0 0110 0zM15.642 13.644a3.939 3.939 0 01-.573-2.181v-.892a3.069 3.069 0 10-6.138 0v.892a3.939 3.939 0 01-.573 2.181"
      />
      <path
        className="single-woman-book_svg__cls-1"
        d="M8.931 11.078A4.065 4.065 0 0012 9.671a4.065 4.065 0 003.069 1.407M14.705 11.061a2.708 2.708 0 01-5.41 0"
      />
    </g>
  );

export default SvgSingleWomanBook;
