import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraNext = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-next_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-next_svg__a"
      d="M6.75 12.75h-4.5a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5V9M19.579 10.165l2.586 1.292a.75.75 0 001.085-.671V2.713a.749.749 0 00-1.085-.67l-2.586 1.292a1.5 1.5 0 00-.829 1.342v4.146a1.5 1.5 0 00.829 1.342zM14.95 19.35a.75.75 0 000-1.2l-4-3a.75.75 0 00-1.2.6v6a.75.75 0 001.2.6z"
    />,
    <rect
      className="controls-camera-next_svg__a"
      x={18}
      y={14.25}
      width={3.001}
      height={9}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgControlsCameraNext;
