import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudServer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-server_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-server_svg__a"
      d="M6.75 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 14.25h1.5M16.5 14.25H18M6.75 19.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M12 20.25h1.5M16.5 20.25H18"
    />,
    <path
      className="cloud-server_svg__a"
      d="M21 14.25a3 3 0 01-3 3H6a3 3 0 010-6h12a3 3 0 013 3zM21 20.25a3 3 0 01-3 3H6a3 3 0 010-6h12a3 3 0 013 3z"
    />,
    <path
      className="cloud-server_svg__a"
      d="M23.12 12a4.881 4.881 0 00-4.745-6 4.844 4.844 0 00-2.764.865 7.5 7.5 0 10-14.236 4.386"
    />
  );

export default SvgCloudServer;
