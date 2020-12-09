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
      d="M20.5 22.5a1 1 0 01-1 1h-16V.5h16a1 1 0 011 1zM3.5.5h-2a1 1 0 00-1 1v21a1 1 0 001 1h2M20.5 2h1a2.006 2.006 0 012 2v3h-3M20.5 7h3v5h-3M20.5 12h3v5h-3M20.5 17h3v3a2.006 2.006 0 01-2 2h-1"
    />,
    <g id="single-man-phone-book_svg___Group_" data-name="&lt;Group&gt;">
      <path
        className="single-man-phone-book_svg__cls-1"
        d="M16.5 18.5a5 5 0 00-10 0zM8.915 7.477a4.986 4.986 0 005.558 1.117"
      />
      <circle
        className="single-man-phone-book_svg__cls-1"
        cx={11.5}
        cy={9}
        r={3}
      />
    </g>
  );

export default SvgSingleManPhoneBook;
