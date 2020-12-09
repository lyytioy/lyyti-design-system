import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-exchange_svg__a"
      d="M14.5 9.5v-6a1 1 0 00-1-1h-7a1 1 0 01-.8-.4L4.8.9A1 1 0 004 .5H1.5a1 1 0 00-1 1v9a1 1 0 001 1h6M22.5 14.5h-7a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4h-2.5a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1zM23.5 7.5V6A1.5 1.5 0 0022 4.5h-5"
    />,
    <path
      className="folder-exchange_svg__a"
      d="M19 2.5l-2 2 2 2M.5 16.5V18A1.5 1.5 0 002 19.5h5"
    />,
    <path className="folder-exchange_svg__a" d="M5 21.5l2-2-2-2" />
  );

export default SvgFolderExchange;
