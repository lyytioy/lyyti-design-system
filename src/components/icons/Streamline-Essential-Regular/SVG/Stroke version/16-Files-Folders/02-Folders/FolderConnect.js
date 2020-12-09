import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderConnect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-connect_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-connect_svg__a"
      d="M1.5 18.75a1.5 1.5 0 001.5 1.5h1.5M8.25 6.75H12M1.5 6.75h3M1.5 4.5v3.75M1.5 12v3M12 20.25H8.25M21.75 2.25h-4.5L15.97.97a.749.749 0 00-.53-.22h-2.69a.75.75 0 00-.75.75V9a.75.75 0 00.75.75h9A.75.75 0 0022.5 9V3a.75.75 0 00-.75-.75zM21.75 15.75h-4.5l-1.28-1.28a.749.749 0 00-.53-.22h-2.69A.75.75 0 0012 15v7.5a.75.75 0 00.75.75h9a.75.75 0 00.75-.75v-6a.75.75 0 00-.75-.75z"
    />
  );

export default SvgFolderConnect;
