import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadArrow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-arrow-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-arrow-1_svg__a"
      d="M19 5.5c.55 0 .682.318.293.707l-6.586 6.586a1 1 0 01-1.414 0L4.707 6.207C4.318 5.818 4.45 5.5 5 5.5zM.5 18.5h23"
    />
  );

export default SvgDownloadArrow1;
