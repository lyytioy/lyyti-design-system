import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-phone-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-phone-book_svg__cls-1"
      d="M16.6 16.5a4.51 4.51 0 00-2.383-2.591l-1.842 3.341-1.841-3.341A4.515 4.515 0 008.15 16.5"
    />,
    <circle
      className="single-woman-phone-book_svg__cls-1"
      cx={12.375}
      cy={9}
      r={3}
    />,
    <path
      className="single-woman-phone-book_svg__cls-1"
      d="M9.375 9s0 3.75-2.25 3.75M15.375 9s0 3.75 2.25 3.75M4.5.75v22.5M23.25 3v3M23.25 9v3M23.25 15v3"
    />,
    <rect
      className="single-woman-phone-book_svg__cls-1"
      x={0.75}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSingleWomanPhoneBook;
