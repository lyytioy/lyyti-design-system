import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-pin_svg__a"
      d="M13.875 23.25h-10.5A2.25 2.25 0 011.125 21M19.125 8.25V1.5a.75.75 0 00-.75-.75H4.125a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25h7.5M18.375 15.449a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="book-pin_svg__a"
      d="M18.375 11.324a4.5 4.5 0 014.5 4.5c0 1.921-2.688 5.576-3.909 7.138a.75.75 0 01-1.182 0c-1.221-1.561-3.909-5.217-3.909-7.138a4.5 4.5 0 014.5-4.5z"
    />
  );

export default SvgBookPin;
