import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraBackward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-backward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-backward_svg__a"
      d="M9 12.75H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5V9M19.579 10.165l2.586 1.292a.75.75 0 001.085-.671V2.714a.75.75 0 00-1.085-.671l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342zM15.05 18.15a.75.75 0 000 1.2l4 3a.75.75 0 001.2-.6v-6a.75.75 0 00-1.2-.6z"
    />,
    <path
      className="controls-camera-backward_svg__a"
      d="M15 14.25l-5.2 3.9a.75.75 0 000 1.2l5.2 3.9"
    />
  );

export default SvgControlsCameraBackward;
