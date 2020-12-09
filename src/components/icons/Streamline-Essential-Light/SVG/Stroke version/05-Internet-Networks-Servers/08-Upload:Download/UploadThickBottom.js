import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadThickBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-thick-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-thick-bottom_svg__a"
      d="M18.5 7.5c.275 0 .341-.159.146-.354L12.354.854a.5.5 0 00-.708 0L5.354 7.147c-.2.195-.129.354.146.354h3v10a1 1 0 001 1h5a1 1 0 001-1V7.5z"
    />,
    <path
      className="upload-thick-bottom_svg__a"
      d="M23.5 18.5v4a1 1 0 01-1 1h-21a1 1 0 01-1-1v-4"
    />
  );

export default SvgUploadThickBottom;
