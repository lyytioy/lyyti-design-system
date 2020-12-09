import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraPause = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-pause_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-pause_svg__a"
      d="M8.25 12.75h-6a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5V9M19.579 10.165l2.586 1.292a.75.75 0 001.085-.671V2.714a.75.75 0 00-1.085-.671l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342zM11.25 14.25h3v9h-3zM17.25 14.25h3v9h-3z"
    />
  );

export default SvgControlsCameraPause;
