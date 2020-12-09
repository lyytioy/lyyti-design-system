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
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M10.555 10.888A5.251 5.251 0 00.75 13.5v2.25H3l.75 7.5h4.5l.324-3.233"
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M17.25 20.25v-3M17.25 14.31a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />
  );

export default SvgMultipleActionsInformation;
