import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="image-file-camera_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293z"
    />,
    <path
      className="image-file-camera_svg__a"
      d="M18.5 18.5a1 1 0 01-1 1h-10a1 1 0 01-1-1v-6a1 1 0 011-1H10l.223-.447a1 1 0 01.894-.553h2.764a1 1 0 01.894.553L15 11.5h2.5a1 1 0 011 1z"
    />,
    <circle className="image-file-camera_svg__a" cx={12.5} cy={15.5} r={2} />
  );

export default SvgImageFileCamera;
