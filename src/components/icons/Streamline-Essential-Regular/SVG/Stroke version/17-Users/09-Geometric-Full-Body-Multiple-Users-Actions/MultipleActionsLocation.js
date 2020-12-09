import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M18.75 15.437a.375.375 0 11-.375.375.374.374 0 01.375-.375"
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M18.75 11.312a4.5 4.5 0 014.5 4.5c0 1.92-2.688 5.576-3.909 7.138a.75.75 0 01-1.182 0c-1.221-1.561-3.909-5.217-3.909-7.137a4.5 4.5 0 014.5-4.501z"
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M11.25 13.5a5.25 5.25 0 00-10.5 0v2.25H3l.75 7.5h4.5l.75-7.5h2.25z"
    />
  );

export default SvgMultipleActionsLocation;
