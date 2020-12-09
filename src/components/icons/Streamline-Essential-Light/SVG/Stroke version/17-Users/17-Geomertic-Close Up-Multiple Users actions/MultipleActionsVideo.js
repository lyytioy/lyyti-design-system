import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsVideo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-video_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M23.5 18.167a.5.5 0 00-.64-.48l-1.36.4V17.5a1 1 0 00-1-1h-6a1 1 0 00-1 1v5a1 1 0 001 1h6a1 1 0 001-1v-.667l1.342.448a.5.5 0 00.658-.475zM.5 15.5a6 6 0 0112 0z"
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M13 10.3a6 6 0 018.918 4.2"
    />
  );

export default SvgMultipleActionsVideo;
