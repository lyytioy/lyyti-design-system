import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M9.5 9.645A6.111 6.111 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-text_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-text_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M19.823 8.25a4.446 4.446 0 00-6.66 0"
    />,
    <rect
      className="multiple-actions-text_svg__cls-1"
      x={11.25}
      y={11.25}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M14.25 14.25h6M14.25 17.25h6M14.25 20.25h2.25"
    />
  );

export default SvgMultipleActionsText;
