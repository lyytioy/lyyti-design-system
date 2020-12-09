import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="single-man_svg__cls-1" cx={12} cy={3.75} r={3} />,
    <path
      className="single-man_svg__cls-1"
      d="M17.25 13.5a5.25 5.25 0 00-10.5 0v2.25H9l.75 7.5h4.5l.75-7.5h2.25zM12 8.25v6"
    />
  );

export default SvgSingleMan;
