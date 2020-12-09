import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudFolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-folder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-folder_svg__a"
      d="M20.5 13.906A4.311 4.311 0 0023 9.857a4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <path
      className="cloud-folder_svg__a"
      d="M17 14.5h-5a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4H7a1 1 0 00-1 1v8a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1z"
    />
  );

export default SvgCloudFolder;
