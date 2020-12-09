import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsKey = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-key_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={17}
      cy={20}
      r={1}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M23 13.5h-1.293a.5.5 0 00-.353.146l-3.09 3.09a3.537 3.537 0 00-2.054-.149 3.5 3.5 0 104.2 4.2 3.537 3.537 0 00-.149-2.054l3.09-3.09a.5.5 0 00.146-.353V14a.5.5 0 00-.497-.5zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-key_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-key_svg__cls-1"
      d="M19.47 10.605A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsKey;
