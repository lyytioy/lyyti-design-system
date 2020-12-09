import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHarddriveDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".harddrive-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="harddrive-download_svg__a"
      d="M11.5 12.5V.5M7.5 8.5l4 4 4-4M20 20.5h-1.5"
    />,
    <path
      className="harddrive-download_svg__a"
      d="M6.5 11.5h-1l-4.36 5.232A3.217 3.217 0 00.5 18.5v3a2.006 2.006 0 002 2h19a2.006 2.006 0 002-2v-3a3.217 3.217 0 00-.64-1.768L18.5 11.5H17M.713 17.5h22.574"
    />
  );

export default SvgHarddriveDownload;
