import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleUsers1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-users-1_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-users-1_svg__cls-1"
      cx={4}
      cy={8.25}
      r={2.75}
    />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M7.5 15.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H7.5z"
    />,
    <circle
      className="multiple-users-1_svg__cls-1"
      cx={20}
      cy={8.25}
      r={2.75}
    />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M23.5 15.5a3.5 3.5 0 00-7 0v3h1.583l.417 5h3l.417-5H23.5z"
    />,
    <circle
      className="multiple-users-1_svg__cls-1"
      cx={12}
      cy={2.75}
      r={2.25}
    />,
    <path
      className="multiple-users-1_svg__cls-1"
      d="M12 6a3 3 0 00-3 3v2.5h1.5L11 16h2l.5-4.5H15V9a3 3 0 00-3-3z"
    />
  );

export default SvgMultipleUsers1;
