import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardOscar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-oscar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-oscar_svg__a"
      d="M16.5 18.75h-9A2.25 2.25 0 005.25 21a2.25 2.25 0 002.25 2.25h9A2.25 2.25 0 0018.75 21a2.25 2.25 0 00-2.25-2.25z"
    />,
    <circle className="award-oscar_svg__a" cx={12} cy={4.5} r={3.75} />,
    <path
      className="award-oscar_svg__a"
      d="M14.25 18.75h-4.5L7.3 10.162A1.5 1.5 0 018.739 8.25h6.522a1.5 1.5 0 011.439 1.912z"
    />
  );

export default SvgAwardOscar;
