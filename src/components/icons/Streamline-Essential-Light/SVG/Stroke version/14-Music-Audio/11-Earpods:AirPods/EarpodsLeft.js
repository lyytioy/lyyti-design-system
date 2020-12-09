import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="earpods-left_svg__a" cx={9} cy={18} r={5.5} />,
    <path
      className="earpods-left_svg__a"
      d="M8.5 15.5v4a1 1 0 001 1h1M16 8.5a1.5 1.5 0 011.5 1.5"
    />,
    <path
      className="earpods-left_svg__a"
      d="M20.5 22.5a1 1 0 01-1 1h-1a1 1 0 01-1-1V10a5.9 5.9 0 01-2.5.5 5.712 5.712 0 01-4.241-1.821 1 1 0 01-.259-.672V2.993a1 1 0 01.259-.672A5.712 5.712 0 0115 .5a5.268 5.268 0 015.5 5z"
    />,
    <path
      className="earpods-left_svg__a"
      d="M13.25 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgEarpodsLeft;
