import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadDashArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-dash-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-dash-arrow_svg__a"
      d="M16.5 12.001v-3h3.75L12 .751l-8.25 8.25H7.5v3M16.5 15.001v3M16.5 21.001v2.25M7.5 15.001v3M7.5 21.001v2.25"
    />
  );

export default SvgUploadDashArrow;
