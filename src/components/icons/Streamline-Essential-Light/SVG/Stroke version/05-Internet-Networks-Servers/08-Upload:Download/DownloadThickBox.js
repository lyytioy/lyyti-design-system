import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadThickBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-thick-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-thick-box_svg__a"
      d="M15.5 14.5v-6h-7v6h-3L12 21l6.469-6.5H15.5z"
    />,
    <path
      className="download-thick-box_svg__a"
      d="M22.629 4.572A6.22 6.22 0 0123 6.5v16a1 1 0 01-1 1H2a1 1 0 01-1-1v-16a6.22 6.22 0 01.371-1.928l1.258-3.144A1.6 1.6 0 014 .5h16a1.6 1.6 0 011.371.928zM12 6V.5M1.034 6h21.932"
    />
  );

export default SvgDownloadThickBox;
