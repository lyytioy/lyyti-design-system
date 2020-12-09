import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-transfer_svg__a"
      d="M5.146 5.6l12.668 11.645a.5.5 0 01.013.724L13 22.755a.5.5 0 01-.852-.355V1.8A.5.5 0 0113 1.444l4.829 4.787a.5.5 0 01-.014.723L5.12 18.6"
    />,
    <rect
      className="bluetooth-transfer_svg__a"
      x={4.232}
      y={10.686}
      width={2.828}
      height={2.828}
      rx={0.5}
      ry={0.5}
      transform="rotate(-45 5.647 12.1)"
    />,
    <rect
      className="bluetooth-transfer_svg__a"
      x={17.232}
      y={10.686}
      width={2.828}
      height={2.828}
      rx={0.5}
      ry={0.5}
      transform="rotate(-45 18.647 12.1)"
    />
  );

export default SvgBluetoothTransfer;
