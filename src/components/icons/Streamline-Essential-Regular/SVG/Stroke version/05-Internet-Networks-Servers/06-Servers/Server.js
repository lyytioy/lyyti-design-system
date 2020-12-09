import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgServer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".server_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="server_svg__a"
      d="M5.626 7.875A.375.375 0 106 8.25a.375.375 0 00-.375-.375M13.501 8.25h1.5M18.001 8.25h1.5M5.626 13.875A.375.375 0 106 14.25a.375.375 0 00-.375-.375M13.501 14.25h1.5M18.001 14.25h1.5M12.001 17.25v6M4.501 23.25h15M22.876 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M1.14 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="server_svg__a"
      d="M23.251 14.25a3 3 0 01-3 3h-16.5a3 3 0 010-6h16.5a3 3 0 013 3zM23.251 8.25a3 3 0 01-3 3h-16.5a3 3 0 010-6h16.5a3 3 0 013 3z"
    />,
    <path
      className="server_svg__a"
      d="M1.279 6.55l1.936-3.485A4.5 4.5 0 017.149.75h9.7a4.5 4.5 0 013.934 2.315l1.94 3.485"
    />
  );

export default SvgServer;
