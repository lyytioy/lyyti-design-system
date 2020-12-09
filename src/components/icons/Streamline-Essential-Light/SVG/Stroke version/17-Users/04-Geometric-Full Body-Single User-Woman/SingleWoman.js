import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="single-woman_svg__cls-1" cx={12} cy={4} r={3.5} />,
    <path
      className="single-woman_svg__cls-1"
      d="M8.547 4.577A4.633 4.633 0 0012 2.974a4.632 4.632 0 003.452 1.6M14.217 9.715L12 13.206 9.802 9.701"
    />,
    <path
      className="single-woman_svg__cls-1"
      d="M12 9a3.8 3.8 0 013.7 2.918l1.8 6.582h-2.957l-1.054 5h-3l-1.054-5H6.5l1.8-6.582A3.8 3.8 0 0112 9z"
    />
  );

export default SvgSingleWoman;
