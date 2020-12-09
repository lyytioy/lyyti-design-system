import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadThickBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-thick-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-thick-bottom_svg__a"
      d="M18.751 8.5L12 1.75 5.251 8.5H9v6.75a.75.75 0 00.75.75h4.5a.75.75 0 00.75-.75V8.5zM23.251 17.5v3a1.5 1.5 0 01-1.5 1.5h-19.5a1.5 1.5 0 01-1.5-1.5v-3"
    />
  );

export default SvgUploadThickBottom;
