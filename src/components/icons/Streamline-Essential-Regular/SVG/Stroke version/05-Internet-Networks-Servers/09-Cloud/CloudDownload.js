import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudDownload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-download_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-download_svg__a"
      d="M12 14.25v9M15.75 19.5L12 23.25 8.25 19.5M16.5 15.75h1.875a4.875 4.875 0 10-2.764-8.885 7.5 7.5 0 10-8.149 8.844"
    />
  );

export default SvgCloudDownload;
