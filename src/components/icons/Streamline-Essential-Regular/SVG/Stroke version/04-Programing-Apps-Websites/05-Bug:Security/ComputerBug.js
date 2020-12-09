import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgComputerBug = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".computer-bug_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="computer-bug_svg__a"
      d="M17.25 7.5a5.25 5.25 0 00-10.5 0v.75h10.5zM6.75 18a5.25 5.25 0 0010.5 0V8.25H6.75zM16.594 4.959A4.5 4.5 0 0019.5.75M7.406 4.959A4.5 4.5 0 014.5.75M17.25 12.75h6M23.25 18.75a6 6 0 010-12M6.75 12.75h-6M.75 18.75a6 6 0 000-12"
    />
  );

export default SvgComputerBug;
