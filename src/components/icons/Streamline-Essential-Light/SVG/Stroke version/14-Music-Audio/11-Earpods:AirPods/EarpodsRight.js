import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="earpods-right_svg__a" cx={15} cy={18} r={5.5} />,
    <path
      className="earpods-right_svg__a"
      d="M14.5 20.5v-5h.75a1.25 1.25 0 010 2.5h-.75M16.5 20.5L15 18M8 8.5A1.5 1.5 0 006.5 10"
    />,
    <path
      className="earpods-right_svg__a"
      d="M3.5 22.5a1 1 0 001 1h1a1 1 0 001-1V10a5.9 5.9 0 002.5.5 5.712 5.712 0 004.241-1.821 1 1 0 00.259-.672V2.993a1 1 0 00-.259-.672A5.712 5.712 0 009 .5a5.268 5.268 0 00-5.5 5z"
    />,
    <path
      className="earpods-right_svg__a"
      d="M10.75 5.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgEarpodsRight;
