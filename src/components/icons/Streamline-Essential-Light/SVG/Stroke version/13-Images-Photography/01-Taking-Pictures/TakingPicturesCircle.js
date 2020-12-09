import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="taking-pictures-circle_svg__a"
      cx={12}
      cy={12}
      r={2.5}
    />,
    <path
      className="taking-pictures-circle_svg__a"
      d="M18 8.5h-2a1.391 1.391 0 01-.854-.354l-1.292-1.292A1.391 1.391 0 0013 6.5h-2a1.391 1.391 0 00-.854.354L8.854 8.146A1.391 1.391 0 018 8.5H6A1.5 1.5 0 004.5 10v5A1.5 1.5 0 006 16.5h12a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0018 8.5z"
    />,
    <circle
      className="taking-pictures-circle_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="taking-pictures-circle_svg__a"
      d="M17 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgTakingPicturesCircle;
