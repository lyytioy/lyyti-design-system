import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-music__svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-music__svg__a"
      d="M21.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v17a1 1 0 01-1 1h-16a2 2 0 01-2-2v-19M4.5 2.5h16"
    />,
    <circle className="book-music__svg__a" cx={7.498} cy={17.795} r={2} />,
    <circle className="book-music__svg__a" cx={15.498} cy={15.795} r={2} />,
    <path
      className="book-music__svg__a"
      d="M17.5 15.8V9a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.982v7.67"
    />
  );

export default SvgBookMusic;
