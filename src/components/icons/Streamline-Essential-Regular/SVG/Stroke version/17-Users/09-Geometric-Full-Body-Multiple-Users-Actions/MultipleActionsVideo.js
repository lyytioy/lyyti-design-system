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
      d="M23.25 15.75l-3 1v-1a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-1l3 1z"
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.285-.71"
    />,
    <circle
      className="multiple-actions-video_svg__cls-1"
      cx={6}
      cy={3.75}
      r={3}
    />,
    <path
      className="multiple-actions-video_svg__cls-1"
      d="M10.309 10.5a5.25 5.25 0 00-9.559 3v2.25H3l.75 7.5h4.5L8.775 18"
    />
  );

export default SvgMultipleActionsVideo;
