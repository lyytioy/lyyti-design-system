import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsVideo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-video_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M10.782 10.513A6.052 6.052 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71M23.25 15.75l-3 1v-1a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-1l3 1z"
    />
  );

export default SvgMultipleActionsVideo;
