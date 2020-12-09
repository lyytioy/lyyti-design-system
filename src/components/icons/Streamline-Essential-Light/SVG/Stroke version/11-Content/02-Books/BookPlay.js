import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-play_svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <path
      className="book-play_svg__a"
      d="M18.5 10A1.5 1.5 0 0017 8.5H8A1.5 1.5 0 006.5 10v9A1.5 1.5 0 008 20.5h9a1.5 1.5 0 001.5-1.5z"
    />,
    <path
      className="book-play_svg__a"
      d="M10.5 14.5v-1.82a.43.43 0 01.651-.369l3.034 1.82a.43.43 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369z"
    />
  );

export default SvgBookPlay;
