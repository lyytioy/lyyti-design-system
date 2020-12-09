import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-information_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M17.25 20.25v-3M17.25 14.31a.375.375 0 10.375.375.374.374 0 00-.375-.375M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />
  );

export default SvgMultipleActionsInformation;
