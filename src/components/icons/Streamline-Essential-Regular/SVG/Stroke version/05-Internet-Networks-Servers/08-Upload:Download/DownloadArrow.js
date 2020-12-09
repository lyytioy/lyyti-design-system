import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-arrow_svg__a"
      d="M.751 22h22.5M3.751 1.75l7.72 14.47a.749.749 0 001.06 0l7.72-14.47"
    />
  );

export default SvgDownloadArrow;
