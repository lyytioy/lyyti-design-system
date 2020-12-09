import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-phone-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-phone-book_svg__cls-1"
      d="M17 17l-3.5-1.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2L6 17"
    />,
    <path
      className="single-man-phone-book_svg__cls-1"
      d="M20.5 22.5a1 1 0 01-1 1h-16V.5h16a1 1 0 011 1zM3.5.5h-2a1 1 0 00-1 1v21a1 1 0 001 1h2M20.5 2.5h1a2.006 2.006 0 012 2v2h-3M20.5 6.5h3v5h-3M20.5 11.5h3v5h-3M20.5 16.5h3v2a2.006 2.006 0 01-2 2h-1"
    />
  );

export default SvgSingleManPhoneBook;
