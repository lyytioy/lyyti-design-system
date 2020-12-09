import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-woman-actions-key_svg__cls-1"
      d="M15.575 18.925a.375.375 0 11-.531 0 .375.375 0 01.531 0"
    />,
    <path
      className="single-woman-actions-key_svg__cls-1"
      d="M19.086 17.71l3.688-3.688a1.624 1.624 0 10-2.3-2.3l-3.684 3.691a4.061 4.061 0 102.3 2.3z"
    />,
    <circle
      className="single-woman-actions-key_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-woman-actions-key_svg__cls-1"
      d="M8.25 23.25l.75-7.5h2.25V13.5a5.244 5.244 0 00-2.365-4.386L6 13.5 3.114 9.114A5.246 5.246 0 00.75 13.5v2.25H3l.75 7.5zM3 3.75S3 7.5.75 7.5M9 3.75S9 7.5 11.25 7.5"
    />
  );

export default SvgSingleWomanActionsKey;
