import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="wifi-transfer_svg__a"
      x={0.5}
      y={3.5}
      width={10}
      height={20}
      rx={2}
      ry={2}
    />,
    <path
      className="wifi-transfer_svg__a"
      d="M10.5 19.5H.5M5.5 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M8.5 1.5a1 1 0 011-1h13a1 1 0 011 1v12a1 1 0 01-1 1H13M12.5 23.5l6-6M14.5 17.5h4v4M21 5.415a6.36 6.36 0 00-8 0M14.667 7.825a3.711 3.711 0 014.666 0"
    />,
    <path
      className="wifi-transfer_svg__a"
      d="M17 10a.25.25 0 11-.25.25A.25.25 0 0117 10"
    />
  );

export default SvgWifiTransfer;
