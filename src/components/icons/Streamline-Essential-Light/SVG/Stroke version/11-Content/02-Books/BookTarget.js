import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="book-target_svg__a" cx={16.5} cy={17.5} r={6} />,
    <path className="book-target_svg__a" d="M10.5 23.5h-7a2 2 0 01-2-2v-19" />,
    <path
      className="book-target_svg__a"
      d="M20.5.5h-17a2 2 0 000 4h16a1 1 0 011 1v4M3.5 2.5h16"
    />,
    <circle className="book-target_svg__a" cx={16.5} cy={17.5} r={2} />
  );

export default SvgBookTarget;
