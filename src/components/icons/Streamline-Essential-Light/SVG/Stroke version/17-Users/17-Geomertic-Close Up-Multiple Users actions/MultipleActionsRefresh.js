import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-refresh_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-refresh_svg__cls-1"
      d="M22.9 17.5a5 5 0 00-9.8 0M23.5 14.5v3h-3M13.1 19.5a5 5 0 009.8 0"
    />,
    <path
      className="multiple-actions-refresh_svg__cls-1"
      d="M12.5 22.5v-3h2.9M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-refresh_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-refresh_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-refresh_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.463-.306"
    />
  );

export default SvgMultipleActionsRefresh;
