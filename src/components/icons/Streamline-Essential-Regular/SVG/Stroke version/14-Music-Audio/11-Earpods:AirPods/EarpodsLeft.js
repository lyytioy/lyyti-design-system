import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-left_svg__a"
      d="M20.25 10.745V9M17.25 5.625a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-left_svg__a"
      d="M23.25 6v16.5a.75.75 0 01-.75.75H21a.75.75 0 01-.75-.75V10.745a5.255 5.255 0 01-6-1.071V2.326a5.25 5.25 0 019 3.674z"
    />,
    <circle className="earpods-left_svg__a" cx={7.5} cy={16.5} r={6.75} />,
    <path className="earpods-left_svg__a" d="M6.75 13.5v3.75h3" />
  );

export default SvgEarpodsLeft;
