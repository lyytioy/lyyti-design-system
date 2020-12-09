import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-camera_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15a1.5 1.5 0 011.047.426l3 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <path
      className="image-file-camera_svg__a"
      d="M15 9.75l-.75-1.5h-4.5L9 9.75H7.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="image-file-camera_svg__a"
      cx={12}
      cy={13.125}
      r={1.875}
    />
  );

export default SvgImageFileCamera;
