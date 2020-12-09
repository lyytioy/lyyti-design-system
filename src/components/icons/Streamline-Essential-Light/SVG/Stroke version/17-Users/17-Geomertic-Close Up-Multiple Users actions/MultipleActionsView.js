import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={4}
    />,
    <path
      className="multiple-actions-view_svg__cls-1"
      d="M20.328 20.328L23.5 23.5M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-view_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-view_svg__cls-1"
      d="M19.47 10.605a6.005 6.005 0 00-6.5-.286"
    />
  );

export default SvgMultipleActionsView;
