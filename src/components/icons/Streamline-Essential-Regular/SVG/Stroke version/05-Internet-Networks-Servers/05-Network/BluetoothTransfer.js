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
      d="M6 6l11.25 11.25L12 22.5v-21l5.25 5.25L6 18"
    />,
    <circle className="bluetooth-transfer_svg__a" cx={21} cy={12} r={1.5} />,
    <circle className="bluetooth-transfer_svg__a" cx={3} cy={12} r={1.5} />
  );

export default SvgBluetoothTransfer;
