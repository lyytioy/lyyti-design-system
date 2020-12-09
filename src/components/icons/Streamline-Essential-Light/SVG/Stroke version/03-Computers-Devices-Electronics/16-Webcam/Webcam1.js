import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="webcam-1_svg__a" cx={12} cy={8.5} r={3} />,
    <path
      className="webcam-1_svg__a"
      d="M23.5 8.5a5 5 0 01-5 5h-13a5 5 0 010-10h13a5 5 0 015 5zM11 8.5a1 1 0 011-1M15 20.5H9l1-7h4l1 7zM7.5 20.5h9"
    />
  );

export default SvgWebcam1;
