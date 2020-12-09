import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-download_svg__a"
      d="M6.75 8.25h-1.5a1.5 1.5 0 00-1.5 1.5v6a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-1.5M20.249 23.25H3.751a1.5 1.5 0 01-1.4-2.026l.953-3a1.5 1.5 0 011.4-.974h14.42a1.5 1.5 0 011.4.974l1.125 3a1.5 1.5 0 01-1.4 2.026zM10.501 20.25h3M12.001.75V13.5"
    />,
    <path className="laptop-download_svg__a" d="M15.001 10.5l-3 3-3-3" />
  );

export default SvgLaptopDownload;
