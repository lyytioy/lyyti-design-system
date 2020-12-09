import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={2}
    />,
    <path
      className="multiple-actions-address_svg__cls-1"
      d="M19.787 23.333A5 5 0 1123.5 18.5v.5a1.5 1.5 0 01-3 0M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-address_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-address_svg__cls-1"
      d="M20.531 11.566A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsAddress;
