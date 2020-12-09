import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71M15.575 18.925a.375.375 0 11-.531 0 .375.375 0 01.531 0"
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M19.086 17.71l3.688-3.688a1.624 1.624 0 10-2.3-2.3l-3.684 3.691a4.061 4.061 0 102.3 2.3z"
    />
  );

export default SvgMultipleActionsKey;
