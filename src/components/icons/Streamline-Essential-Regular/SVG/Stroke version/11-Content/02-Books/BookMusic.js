import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-music__svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-music__svg__a"
      d="M9.75 23.25H3A2.25 2.25 0 01.75 21M18.75 9.75V1.5A.75.75 0 0018 .75H3.75a3 3 0 00-3 3V21A2.25 2.25 0 013 18.75h6.75"
    />,
    <circle className="book-music__svg__a" cx={13.875} cy={21.375} r={1.875} />,
    <circle className="book-music__svg__a" cx={21.375} cy={19.125} r={1.875} />,
    <path
      className="book-music__svg__a"
      d="M15.75 21.375v-6.794a1.5 1.5 0 011.026-1.423l4.5-1.25a1.5 1.5 0 011.974 1.423v5.794"
    />
  );

export default SvgBookMusic;
