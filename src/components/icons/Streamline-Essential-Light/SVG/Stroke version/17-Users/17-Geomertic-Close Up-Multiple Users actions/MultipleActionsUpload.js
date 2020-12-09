import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-upload_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="multiple-actions-upload_svg__cls-1"
      cx={18.5}
      cy={18.5}
      r={5}
    />,
    <path
      className="multiple-actions-upload_svg__cls-1"
      d="M18.5 16.5v4M16.5 18.5l2-2 2 2M.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-upload_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-upload_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-upload_svg__cls-1"
      d="M19.47 10.605a6 6 0 00-6.477-.3"
    />
  );

export default SvgMultipleActionsUpload;
