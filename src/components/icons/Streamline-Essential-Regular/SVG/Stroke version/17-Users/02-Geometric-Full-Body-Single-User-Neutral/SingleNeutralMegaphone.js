import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralMegaphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-megaphone_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-megaphone_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-neutral-megaphone_svg__cls-1"
      d="M7.5 23.25l.75-7.5h1.5v-3a4.5 4.5 0 00-9 0v3h1.5l.75 7.5zM22.318 8.557L14.25 6.54V2.79L22.318.773a.749.749 0 01.932.727v6.329a.751.751 0 01-.932.728zM14.25 1.29v6.75"
    />,
    <path
      className="single-neutral-megaphone_svg__cls-1"
      d="M17.25 7.29v.628a3.291 3.291 0 002.25 3.122"
    />
  );

export default SvgSingleNeutralMegaphone;
