import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanMegaphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-megaphone_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-megaphone_svg__cls-1"
      d="M22.318 8.557L14.25 6.54V2.79L22.318.773a.749.749 0 01.932.727v6.329a.751.751 0 01-.932.728zM14.25 1.29v6.75"
    />,
    <path
      className="single-woman-megaphone_svg__cls-1"
      d="M17.25 7.29v.628a3.291 3.291 0 002.25 3.122"
    />,
    <circle
      className="single-woman-megaphone_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-megaphone_svg__cls-1"
      d="M8.886 9.114L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5h4.5l.75-7.5h2.25V13.5a5.246 5.246 0 00-2.364-4.386zM3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanMegaphone;
