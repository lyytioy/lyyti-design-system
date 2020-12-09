import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="earpods-right_svg__a"
      d="M3.75 10.745V9M6.75 5.625A.375.375 0 107.125 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="earpods-right_svg__a"
      d="M.75 6v16.5a.75.75 0 00.75.75H3a.75.75 0 00.75-.75V10.745a5.255 5.255 0 006-1.071V2.326A5.25 5.25 0 00.75 6z"
    />,
    <circle className="earpods-right_svg__a" cx={16.5} cy={16.5} r={6.75} />,
    <path
      className="earpods-right_svg__a"
      d="M15 20.25v-7.5M15 12.75h1.125a1.875 1.875 0 010 3.75H15M18 20.25l-2.25-3.75"
    />
  );

export default SvgEarpodsRight;
