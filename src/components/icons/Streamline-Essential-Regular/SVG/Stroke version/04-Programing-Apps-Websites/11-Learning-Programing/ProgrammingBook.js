import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-book_svg__a"
      d="M3.25 3v18.3a1.994 1.994 0 002.029 1.956h14.206a1 1 0 001.015-.978V6.753a1.5 1.5 0 00-1.5-1.5h-.75"
    />,
    <path
      className="programming-book_svg__a"
      d="M19 5.253H5.5A2.25 2.25 0 013.25 3 2.25 2.25 0 015.5.753h12a1.5 1.5 0 011.5 1.5v3M7 12.003l2.25 2.25L7 16.503M12.087 14.253H16"
    />
  );

export default SvgProgrammingBook;
