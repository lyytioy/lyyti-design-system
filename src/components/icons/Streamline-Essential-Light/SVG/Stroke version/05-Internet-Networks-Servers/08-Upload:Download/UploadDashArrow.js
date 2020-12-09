import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadDashArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-dash-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-dash-arrow_svg__a"
      d="M9.527 11.571v-3.5h-3.5c-.55 0-.693-.329-.318-.732L11.345 1.3a.921.921 0 011.364 0l5.636 6.037c.375.4.232.732-.318.732h-3.5v3.5M9.527 14.571v3M14.527 14.571v3M9.527 20.571v2.5M14.527 20.571v2.5"
    />
  );

export default SvgUploadDashArrow;
