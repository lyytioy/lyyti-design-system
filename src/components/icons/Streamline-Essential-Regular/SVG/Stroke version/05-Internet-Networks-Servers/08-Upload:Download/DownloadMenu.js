import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-menu_svg__a"
      d="M8.25 6.75L12 10.5l3.75-3.75M12 .75v9.75M.75 23.25h22.5M.75 18.75h22.5M.75 14.25h22.5"
    />
  );

export default SvgDownloadMenu;
