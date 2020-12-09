import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsCameraPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-camera-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-camera-play_svg__a"
      d="M9 13.187H2.25a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5h12a1.5 1.5 0 011.5 1.5v6.75M19.579 10.6l2.586 1.293a.75.75 0 001.085-.671V3.15a.75.75 0 00-1.085-.671l-2.586 1.293a1.5 1.5 0 00-.829 1.342V9.26a1.5 1.5 0 00.829 1.34zM19.928 17.794l-6.042-3.626a.75.75 0 00-1.136.643v7.251a.75.75 0 001.136.643l6.042-3.625a.749.749 0 000-1.286z"
    />
  );

export default SvgControlsCameraPlay;
