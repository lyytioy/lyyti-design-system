import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-upload_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-upload_svg__cls-1"
      d="M.75 17.249a6.753 6.753 0 019.4-6.208M3.945 2.78a6.844 6.844 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-upload_svg__cls-1"
      cx={7.5}
      cy={4.874}
      r={4.125}
    />,
    <circle
      className="single-man-actions-upload_svg__cls-1"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="single-man-actions-upload_svg__cls-1"
      d="M17.25 20.249v-6M17.25 14.249L15 16.499M17.25 14.249l2.25 2.25"
    />
  );

export default SvgSingleManActionsUpload;
