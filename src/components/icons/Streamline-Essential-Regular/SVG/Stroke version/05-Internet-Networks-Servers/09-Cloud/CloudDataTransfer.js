import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-data-transfer_svg__a"
      d="M8.25 23.25v-10.5M19.569 15.6a4.875 4.875 0 10-3.958-8.738 7.5 7.5 0 10-12.6 6.749"
    />,
    <path
      className="cloud-data-transfer_svg__a"
      d="M11.25 15.75l-3-3-3 3M15.75 12.75v10.5M12.75 20.25l3 3 3-3"
    />
  );

export default SvgCloudDataTransfer;
