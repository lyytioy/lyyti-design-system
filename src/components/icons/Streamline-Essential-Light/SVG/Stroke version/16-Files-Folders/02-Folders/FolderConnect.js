import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderConnect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-connect_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-connect_svg__a"
      d="M23.5 5a1 1 0 00-1-1h-4.882a1 1 0 01-.894-.553l-.448-.894A1 1 0 0015.382 2H13.5a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1zM23.5 17a1 1 0 00-1-1h-4.882a1 1 0 01-.894-.553l-.448-.894a1 1 0 00-.894-.553H13.5a1 1 0 00-1 1v7a1 1 0 001 1h9a1 1 0 001-1zM.5 1v2M.5 6v2M.5 11v2M.5 16v1a1 1 0 001 1h1M.5 7h2M5.5 7h2M10.5 7h2M5.5 18h2M10.5 18h2"
    />
  );

export default SvgFolderConnect;
