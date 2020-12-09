import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-warning_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 19v-2.5M23.376 22.021l-4-8a1 1 0 00-1.756 0l-4 8a1 1 0 00.88 1.479h8a1 1 0 00.876-1.479z"
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M18.5 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-warning_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-warning_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.462-.307"
    />
  );

export default SvgMultipleActionsWarning;
