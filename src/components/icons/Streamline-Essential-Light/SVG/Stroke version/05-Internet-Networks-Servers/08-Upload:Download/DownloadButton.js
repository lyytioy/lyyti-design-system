import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-button_svg__a"
      d="M12 .5v16.615M16 12.115l-4 5-4-5"
    />,
    <path
      className="download-button_svg__a"
      d="M9.5 7.5H5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-14a1 1 0 00-1-1h-4.5"
    />
  );

export default SvgDownloadButton;
