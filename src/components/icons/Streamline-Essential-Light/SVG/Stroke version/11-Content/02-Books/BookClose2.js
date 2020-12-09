import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="book-close-2_svg__a" d="M5.5 2.5h11a1 1 0 011 1v1" />,
    <path
      className="book-close-2_svg__a"
      d="M19.5 4.5v-3a1 1 0 00-1-1h-13a2 2 0 000 4h14a1 1 0 011 1v17a1 1 0 01-1 1h-14a2 2 0 01-2-2v-19"
    />
  );

export default SvgBookClose2;
