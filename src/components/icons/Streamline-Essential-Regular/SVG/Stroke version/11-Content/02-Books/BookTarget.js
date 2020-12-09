import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookTarget = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-target_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-target_svg__a"
      d="M11.25 23.25h-7.5A2.25 2.25 0 011.5 21M19.5 9.75V1.5a.75.75 0 00-.75-.75H4.5a3 3 0 00-3 3V21a2.25 2.25 0 012.25-2.25H9"
    />,
    <circle className="book-target_svg__a" cx={17.25} cy={18} r={5.25} />,
    <path
      className="book-target_svg__a"
      d="M17.25 17.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgBookTarget;
