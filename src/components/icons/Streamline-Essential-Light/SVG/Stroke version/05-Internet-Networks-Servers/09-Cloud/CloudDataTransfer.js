import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-data-transfer_svg__a"
      d="M20.5 14.406a4.311 4.311 0 002.5-4.049 4.711 4.711 0 00-4.954-4.635A6.706 6.706 0 0012 2a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.518 3.186 3.186 0 003.5 14.8M6 19l3 3 3-3M9 22v-9"
    />,
    <path className="cloud-data-transfer_svg__a" d="M12 16l3-3 3 3M15 13v9" />
  );

export default SvgCloudDataTransfer;
