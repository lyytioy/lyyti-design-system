import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-off_svg__a"
      d="M.75.75l22.5 22.5M15.75 11.25v-3a1.5 1.5 0 00-1.5-1.5H10.5M13.5 18.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5M19.579 16.165l2.586 1.292a.75.75 0 001.085-.671V8.714a.75.75 0 00-1.085-.671l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342z"
    />
  );

export default SvgControlsCameraOff;
