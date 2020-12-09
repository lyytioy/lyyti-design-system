import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-upload_svg__a"
      d="M16.3 15.891h2.4s4.3-.561 4.3-4.783a4.773 4.773 0 00-4.955-4.773A6.685 6.685 0 005.324 8.794 3.586 3.586 0 001 12.3c0 3.645 3.826 3.588 3.826 3.588h2.863M12 10.391v11"
    />,
    <path className="cloud-upload_svg__a" d="M15 13.391l-3-3-3 3" />
  );

export default SvgCloudUpload;
