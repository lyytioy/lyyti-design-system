import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-off_svg__a"
      d="M8 7h7.5a1 1 0 011 1v6.5M12 18H4.5a1 1 0 01-1-1V9.5M23.5 16.234a1 1 0 01-1.514.857l-3-1.8a1 1 0 01-.486-.857v-3.868a1 1 0 01.486-.857l3-1.8a1 1 0 011.514.857zM.5 3l18 18"
    />
  );

export default SvgControlsCameraOff;
