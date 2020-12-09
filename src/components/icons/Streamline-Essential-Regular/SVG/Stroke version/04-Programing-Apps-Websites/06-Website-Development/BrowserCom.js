import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBrowserCom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".browser-com_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="browser-com_svg__a"
      d="M23.25 19.5v.635a1.62 1.62 0 01-1.615 1.615H2.25a1.5 1.5 0 01-1.5-1.5v-.75M.75 8.25V3.865A1.62 1.62 0 012.365 2.25h19.278a1.612 1.612 0 011.607 1.607V8.25M23.25 6.75H.75M8.25 11.25a3 3 0 00-3 3 3 3 0 003 3M12.75 11.25a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 003 0v-3a1.5 1.5 0 00-1.5-1.5zM21.75 17.25v-6L19.5 15l-2.25-3.75v6M2.625 16.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgBrowserCom;
