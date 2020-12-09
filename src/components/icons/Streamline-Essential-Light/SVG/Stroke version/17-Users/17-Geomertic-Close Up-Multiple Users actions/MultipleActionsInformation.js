import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-information_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M18.5 20.5V19a.5.5 0 00-.5-.5h-.5M17.5 20.5h2M18 16.25a.25.25 0 11-.25.25.25.25 0 01.25-.25M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-information_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-information_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.475-.3"
    />
  );

export default SvgMultipleActionsInformation;
