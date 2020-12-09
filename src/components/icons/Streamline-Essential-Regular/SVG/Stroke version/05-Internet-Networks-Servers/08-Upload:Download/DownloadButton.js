import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-button_svg__a"
      d="M12.002.751v15M7.502 11.251l4.5 4.5 4.5-4.5"
    />,
    <path
      className="download-button_svg__a"
      d="M15.752 4.5H18a3 3 0 013 3v12.75a3 3 0 01-3 3H6a3 3 0 01-3-3V7.5a3 3 0 013-3h2.25"
    />
  );

export default SvgDownloadButton;
