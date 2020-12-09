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
      d="M10.781 10.519A6.048 6.048 0 006.75 9.006a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={6.75}
      cy={4.131}
      r={3.375}
    />,
    <circle
      className="multiple-actions-location_svg__cls-1"
      cx={16.5}
      cy={3.381}
      r={2.625}
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M20.4 9.006a4.5 4.5 0 00-7.284-.71M18.75 15.443a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="multiple-actions-location_svg__cls-1"
      d="M18.75 11.318a4.5 4.5 0 014.5 4.5c0 1.92-2.688 5.576-3.909 7.138a.751.751 0 01-1.183 0c-1.221-1.561-3.908-5.217-3.908-7.137a4.5 4.5 0 014.5-4.501z"
    />
  );

export default SvgMultipleActionsLocation;
