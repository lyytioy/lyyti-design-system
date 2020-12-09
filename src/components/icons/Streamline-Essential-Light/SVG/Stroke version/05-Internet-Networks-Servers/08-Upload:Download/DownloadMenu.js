import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="download-menu_svg__a"
      d="M5.5 23.5h13M12 13.5V.5M17.5 8L12 13.5 6.5 8M5.5 20.5h13M5.5 17.5h13"
    />
  );

export default SvgDownloadMenu;
