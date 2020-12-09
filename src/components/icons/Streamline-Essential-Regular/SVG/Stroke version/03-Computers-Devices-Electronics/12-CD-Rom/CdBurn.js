import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBurn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-burn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cd-burn_svg__a"
      d="M15.744 16.5a6.75 6.75 0 11-6.75-6.75"
    />,
    <circle className="cd-burn_svg__a" cx={8.994} cy={16.5} r={2.25} />,
    <path
      className="cd-burn_svg__a"
      d="M15.677.75a5.383 5.383 0 01.546 6.136 1.919 1.919 0 01-2.046-1.636 4.341 4.341 0 00-2.25 4.091 4.909 4.909 0 004.909 4.909 4.978 4.978 0 004.91-4.909C21.927 4.5 19.115 1.875 15.677.75z"
    />
  );

export default SvgCdBurn;
