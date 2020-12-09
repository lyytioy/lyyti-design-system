import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-close-1_svg__a"
      d="M4.5 8v12.5a2.938 2.938 0 003 3l12-1.5V4.5L6.5 6a2 2 0 01-2-2c0-2.287 1.361-1.474 13-3.5M7 4.001l11.5-1.5"
    />
  );

export default SvgBookClose1;
