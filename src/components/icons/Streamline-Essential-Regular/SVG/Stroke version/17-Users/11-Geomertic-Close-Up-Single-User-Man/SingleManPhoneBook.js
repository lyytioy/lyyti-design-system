import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManPhoneBook = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-phone-book_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-phone-book_svg__cls-1"
      cx={12.496}
      cy={9.523}
      r={3.109}
    />,
    <path
      className="single-man-phone-book_svg__cls-1"
      d="M16.871 16.085a5.552 5.552 0 00-8.75 0M15.605 9.626a6.234 6.234 0 01-1.727.243 6.2 6.2 0 01-4.208-1.64M5.25.75v22.5M23.25 3v3M23.25 9v3M23.25 15v3"
    />,
    <rect
      className="single-man-phone-book_svg__cls-1"
      x={0.75}
      y={0.75}
      width={19.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSingleManPhoneBook;
