import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSqueezeSides = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".squeeze-sides_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="squeeze-sides_svg__a"
      d="M9.346 16.5h7.904M6.75 8.25a1.5 1.5 0 00-1.5 1.5v6.75a1.5 1.5 0 001.5 1.5 3 3 0 003-3v-3.75a3 3 0 00-3-3z"
    />,
    <path
      className="squeeze-sides_svg__a"
      d="M6.75 18v.75A2.25 2.25 0 009 21h6a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0015 3H9a2.25 2.25 0 00-2.25 2.25v3M23.25 14.25c-1.281-.213-1.5-1.7-1.5-3a2.25 2.25 0 00-4.5 0M17.132 19.471L23.25 21M.75 7.5L3 5.25.75 3M23.25 7.5L21 5.25 23.25 3"
    />
  );

export default SvgSqueezeSides;
