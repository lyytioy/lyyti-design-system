import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-upload_svg__a"
      d="M12 23.25v-9M8.25 18L12 14.25 15.75 18"
    />,
    <path
      className="cloud-upload_svg__a"
      d="M17.25 15.75h1.125a4.875 4.875 0 10-2.764-8.885A7.5 7.5 0 106.75 15.6"
    />
  );

export default SvgCloudUpload;
