import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-book_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="programming-book_svg__a" d="M5.5 2.5h11a1 1 0 011 1v1" />,
    <path
      className="programming-book_svg__a"
      d="M19.5 4.5v-3a1 1 0 00-1-1h-13a2 2 0 000 4h14a1 1 0 011 1v17a1 1 0 01-1 1h-14a2 2 0 01-2-2v-19"
    />,
    <path
      className="programming-book_svg__a"
      d="M7.5 10.504l2.5 2.5-2.5 2.5M12.5 14.504h4"
    />
  );

export default SvgProgrammingBook;
