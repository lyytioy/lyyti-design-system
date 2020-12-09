import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-book_svg__cls-1"
      d="M20 .5H4.5a1.5 1.5 0 000 3h16a.5.5 0 01.5.5v19a.5.5 0 01-.5.5H5a2 2 0 01-2-2V2"
    />,
    <path
      className="single-man-book_svg__cls-1"
      d="M17.5 18.5L14 17v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2l-3.5 1.5"
    />
  );

export default SvgSingleManBook;
