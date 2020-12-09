import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsProcess = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-process_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-process_svg__cls-1"
      d="M5.5 11v3M7.5 23.5l.5-6h2.5V14a5 5 0 00-10 0v3.5H3l.5 6zM6.667 4a5.805 5.805 0 002.286-.467 3.478 3.478 0 00-6.459-1.3A5.809 5.809 0 006.667 4z"
    />,
    <circle
      className="single-man-actions-process_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-process_svg__cls-1"
      d="M13 12.5h5M18 3.5h-.5a2 2 0 00-2 2v13a2 2 0 002 2h.5M20 4l1 1 2.5-2M20 13l1 1 2.5-2M20 19l3 3M23 19l-3 3"
    />
  );

export default SvgSingleManActionsProcess;
