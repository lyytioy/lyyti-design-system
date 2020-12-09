import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-folder_svg__a"
      d="M20.25 17.25v-3H13.5v-1.5H8.25v9.373a1.127 1.127 0 002.208.321L12 17.25h11.25l-1.112 5.084A1.164 1.164 0 0121 23.25H9.377"
    />,
    <path
      className="cloud-folder_svg__a"
      d="M22.5 13.474a4.875 4.875 0 00-6.88-6.621 7.5 7.5 0 10-10.37 8.272"
    />
  );

export default SvgCloudFolder;
