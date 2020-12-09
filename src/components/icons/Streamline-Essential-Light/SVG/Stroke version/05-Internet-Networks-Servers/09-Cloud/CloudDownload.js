import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-download_svg__a"
      d="M17.24 15.891h1.46s4.3-.561 4.3-4.783a4.773 4.773 0 00-4.955-4.773A6.685 6.685 0 005.324 8.794 3.586 3.586 0 001 12.3c0 3.645 3.826 3.588 3.826 3.588h1.906M12 21V11M9 18.391l3 3 3-3"
    />
  );

export default SvgCloudDownload;
