import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadDashArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-dash-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-dash-arrow_svg__a"
      d="M14.527 12.5V16h3.5c.55 0 .693.329.318.731l-5.587 5.986a1 1 0 01-1.462 0l-5.587-5.986c-.375-.4-.232-.731.318-.731h3.5v-3.5M14.527 9.5v-3M9.527 9.5v-3M14.527 3.5V1M9.527 3.5V1"
    />
  );

export default SvgDownloadDashArrow;
