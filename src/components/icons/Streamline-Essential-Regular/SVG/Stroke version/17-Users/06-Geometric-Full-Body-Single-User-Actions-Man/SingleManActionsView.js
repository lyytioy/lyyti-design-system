import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-view_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-actions-view_svg__cls-1"
      d="M9.674 9.75A5.25 5.25 0 00.75 13.5v2.25H3l.75 7.5h4.5l.285-2.85"
    />,
    <circle
      className="single-man-actions-view_svg__cls-1"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="single-man-actions-view_svg__cls-1"
      d="M23.25 23.25l-3.788-3.788M6 8.25v6"
    />
  );

export default SvgSingleManActionsView;
