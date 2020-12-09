import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-on_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-on_svg__a"
      d="M1 5.7l12.667 11.645a.5.5 0 01.013.723l-4.828 4.787A.5.5 0 018 22.5V1.9a.5.5 0 01.852-.355l4.828 4.786a.5.5 0 01-.014.723L.974 18.7M19.631 4.186a11.5 11.5 0 010 16.264M16.8 7.014a7.5 7.5 0 010 10.607M13.974 9.843a3.5 3.5 0 010 4.95"
    />
  );

export default SvgBluetoothOn;
