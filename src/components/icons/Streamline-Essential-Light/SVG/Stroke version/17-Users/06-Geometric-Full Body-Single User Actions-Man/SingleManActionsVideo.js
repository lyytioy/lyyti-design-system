import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsVideo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-video_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-video_svg__cls-1"
      d="M22.842 16.219L20.5 17v-1a1.5 1.5 0 00-1.5-1.5h-6a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5v-1l2.342.781a.5.5 0 00.658-.475v-4.612a.5.5 0 00-.658-.475zM2.484 2.223A5.809 5.809 0 006.667 4a5.822 5.822 0 002.3-.473"
    />,
    <circle
      className="single-man-actions-video_svg__cls-1"
      cx={5.5}
      cy={4}
      r={3.5}
    />,
    <path
      className="single-man-actions-video_svg__cls-1"
      d="M10.013 11.845A5 5 0 00.5 14v3.5H3l.5 6h4l.5-6h1.482"
    />
  );

export default SvgSingleManActionsVideo;
