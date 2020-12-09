import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-location_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M23.5 17.5c0 2.053-2.7 4.78-3.662 5.69a.489.489 0 01-.676 0c-.962-.91-3.662-3.637-3.662-5.69a4 4 0 018 0z"
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M19.5 17.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M19.991 11.02A6 6 0 0013 10.3"
    />
  );

export default SvgMultipleActionsLocation;
