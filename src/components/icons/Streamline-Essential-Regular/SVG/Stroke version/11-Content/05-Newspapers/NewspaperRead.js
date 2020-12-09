import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperRead = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-read_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="newspaper-read_svg__a" cx={12} cy={4.125} r={3.375} />,
    <path
      className="newspaper-read_svg__a"
      d="M14.92 9.75a6.059 6.059 0 00-5.84 0M12 23.25s3.514-3.126 6.986-3.479a1.464 1.464 0 001.264-1.481v-5.528a1.471 1.471 0 00-1.625-1.5c-3.259.364-6.625 3.01-6.625 3.01s-3.366-2.646-6.625-3.01a1.471 1.471 0 00-1.625 1.5v5.528a1.464 1.464 0 001.264 1.481C8.485 20.124 12 23.25 12 23.25zM12 14.269v8.978"
    />
  );

export default SvgNewspaperRead;
