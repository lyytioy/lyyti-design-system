import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-bottom_svg__a"
      d="M12.001 3.75v12M7.501 11.25l4.5 4.5 4.5-4.5M23.251 15.75v1.5a3 3 0 01-3 3h-16.5a3 3 0 01-3-3v-1.5"
    />
  );

export default SvgDownloadBottom;
