import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadArrow2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-arrow-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="download-arrow-2_svg__a" d="M20 3l-8 13L4 3M.5 21h23" />
  );

export default SvgDownloadArrow2;
