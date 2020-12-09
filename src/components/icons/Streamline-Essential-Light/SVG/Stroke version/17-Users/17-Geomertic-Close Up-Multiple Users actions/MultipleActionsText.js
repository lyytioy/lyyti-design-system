import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-text_svg__cls-1"
      x={13.5}
      y={13.5}
      width={10}
      height={10}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M16.5 16.5h4M16.5 18.5h4M16.5 20.5h2M10.5 15.5H.5a6 6 0 0110.472-4"
    />,
    <circle
      className="multiple-actions-text_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-text_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-text_svg__cls-1"
      d="M20.467 11.494a6 6 0 00-7.473-1.188"
    />
  );

export default SvgMultipleActionsText;
