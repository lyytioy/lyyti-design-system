import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothTransfer1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-transfer-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-transfer-1_svg__a"
      d="M5.25 18.75L18 6 11.25.75v22.5L18 18 5.25 6"
    />,
    <circle
      className="bluetooth-transfer-1_svg__a"
      cx={3}
      cy={12.75}
      r={2.25}
    />,
    <circle
      className="bluetooth-transfer-1_svg__a"
      cx={21}
      cy={12.75}
      r={2.25}
    />
  );

export default SvgBluetoothTransfer1;
