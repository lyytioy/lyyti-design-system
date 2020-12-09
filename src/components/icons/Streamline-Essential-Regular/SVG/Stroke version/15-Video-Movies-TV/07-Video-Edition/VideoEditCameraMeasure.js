import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCameraMeasure = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-camera-measure_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-camera-measure_svg__a"
      d="M23.25 19.5h-9V18a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v1.5M23.25 10.5h-9V12a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5v-1.5M20.308 13.5h2.942M20.308 16.5h2.942M21.75 19.5v3.75M21.75 21.75h-2.192M3.748 5.625A.375.375 0 104.123 6a.375.375 0 00-.375-.375"
    />,
    <path
      className="video-edit-camera-measure_svg__a"
      d="M17.25 7.5v-3a1.5 1.5 0 00-1.5-1.5h-3l-.408-1.224A1.5 1.5 0 0010.919.75H7.081a1.5 1.5 0 00-1.423 1.026L5.25 3h-3a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5h7.5"
    />,
    <circle
      className="video-edit-camera-measure_svg__a"
      cx={9}
      cy={8.25}
      r={3}
    />
  );

export default SvgVideoEditCameraMeasure;
