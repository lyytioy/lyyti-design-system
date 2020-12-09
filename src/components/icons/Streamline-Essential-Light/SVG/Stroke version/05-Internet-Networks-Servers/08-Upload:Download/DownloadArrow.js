import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="download-arrow_svg__a" d="M20 5.5l-8 8-8-8M.5 18.5h23" />
  );

export default SvgDownloadArrow;
