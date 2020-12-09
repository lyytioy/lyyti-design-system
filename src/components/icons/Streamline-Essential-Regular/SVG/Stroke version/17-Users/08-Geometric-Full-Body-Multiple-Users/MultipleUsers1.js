import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleUsers1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-users-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="multiple-users-1_svg__cls-1" cx={4.5} cy={6} r={2.25} />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M4.5 9.75A3.75 3.75 0 00.75 13.5v2.25h1.5l.75 6h3"
    />,
    <circle
      className="multiple-users-1_svg__cls-1"
      cx={19.5}
      cy={6}
      r={2.25}
    />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M19.5 9.75a3.75 3.75 0 013.75 3.75v2.25h-1.5l-.75 6h-3"
    />,
    <circle className="multiple-users-1_svg__cls-1" cx={12} cy={3.75} r={3} />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M17.25 13.5a5.25 5.25 0 00-10.5 0v2.25H9l.75 7.5h4.5l.75-7.5h2.25z"
    />
  );

export default SvgMultipleUsers1;
