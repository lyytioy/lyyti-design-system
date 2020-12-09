import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-transfer_svg__a"
      d="M12.75 4.5a3 3 0 00-3-3h-6a3 3 0 00-3 3v15a3 3 0 003 3h6a3 3 0 003-3V15M.75 18h12M6.75 9.75h7.5"
    />,
    <path
      className="bluetooth-transfer_svg__a"
      d="M12 7.5l2.25 2.25L12 12M15.75 12.75l7.5-6-3.75-3v12l3.75-3-7.5-6"
    />
  );

export default SvgBluetoothTransfer;
