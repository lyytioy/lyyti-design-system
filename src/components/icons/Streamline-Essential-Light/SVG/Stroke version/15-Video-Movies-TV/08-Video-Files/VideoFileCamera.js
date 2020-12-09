import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-camera_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="video-file-camera_svg__a"
      d="M16.577 11.542L13.5 13v-1.5a1 1 0 00-1-1h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V15l3.077 1.459a.62.62 0 00.923-.616v-3.686a.619.619 0 00-.923-.615z"
    />
  );

export default SvgVideoFileCamera;
