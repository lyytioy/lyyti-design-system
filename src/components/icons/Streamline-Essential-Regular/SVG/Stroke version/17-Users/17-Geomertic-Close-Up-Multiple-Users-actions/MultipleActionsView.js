import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="multiple-actions-view_svg__cls-1"
      d="M23.25 23.25l-3.788-3.788M10.022 9.942A6.076 6.076 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-view_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />
  );

export default SvgMultipleActionsView;
