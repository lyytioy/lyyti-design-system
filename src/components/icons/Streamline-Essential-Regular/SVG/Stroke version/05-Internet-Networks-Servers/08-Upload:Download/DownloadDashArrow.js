import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadDashArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-dash-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-dash-arrow_svg__a"
      d="M7.5 12.001v3H3.75l8.25 8.25 8.25-8.25H16.5v-3M7.5 9.001v-3M7.5 3.001V.751M16.5 9.001v-3M16.5 3.001V.751"
    />
  );

export default SvgDownloadDashArrow;
