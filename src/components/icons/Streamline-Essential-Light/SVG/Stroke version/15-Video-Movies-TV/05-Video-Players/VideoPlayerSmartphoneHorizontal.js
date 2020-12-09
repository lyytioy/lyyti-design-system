import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSmartphoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-smartphone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-smartphone-horizontal_svg__a"
      d="M9.307 15.852a.54.54 0 01-.807-.468V8.616a.54.54 0 01.807-.468l5.921 3.384a.539.539 0 010 .936zM2.5 14.502v-5"
    />,
    <rect
      className="video-player-smartphone-horizontal_svg__a"
      x={0.5}
      y={3.5}
      width={23}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="video-player-smartphone-horizontal_svg__a"
      d="M19.5 3.502v16.996M21.25 11.75a.25.25 0 01.25.25.25.25 0 01-.25.25A.25.25 0 0121 12a.25.25 0 01.25-.25"
    />
  );

export default SvgVideoPlayerSmartphoneHorizontal;
