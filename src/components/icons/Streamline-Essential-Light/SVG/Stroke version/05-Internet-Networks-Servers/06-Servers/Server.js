import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="server_svg__a"
      d="M23.047 5.219L19.09 1.113A2 2 0 0017.65.5H6.35a2 2 0 00-1.44.612L.953 5.219"
    />,
    <path
      className="server_svg__a"
      d="M23.5 8.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-2a2 2 0 012-2h19a2 2 0 012 2zM23.5 14.5a2 2 0 01-2 2h-19a2 2 0 01-2-2v-2a2 2 0 012-2h19a2 2 0 012 2z"
    />,
    <path
      className="server_svg__a"
      d="M4.75 7.25A.25.25 0 105 7.5a.25.25 0 00-.25-.25M8.25 7.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M4.75 13.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M8.25 13.25a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 16.5v7M6.5 23.5h11M.5 23.5h1M3.5 23.5h1M19.5 23.5h1M22.5 23.5h1"
    />
  );

export default SvgServer;
