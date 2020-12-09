import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadDashArrow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-dash-arrow-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-dash-arrow-1_svg__a"
      d="M9.527 12.5V8h-3.5c-.55 0-.693-.329-.318-.731l5.636-6.038a.922.922 0 011.364 0l5.636 6.038c.375.4.232.731-.318.731h-3.5v4.5M9.527 14.5V17M14.527 14.5V17M9.527 19v1.5M14.527 19v1.5M9.527 22.5v.5M14.527 22.5v.5"
    />
  );

export default SvgUploadDashArrow1;
