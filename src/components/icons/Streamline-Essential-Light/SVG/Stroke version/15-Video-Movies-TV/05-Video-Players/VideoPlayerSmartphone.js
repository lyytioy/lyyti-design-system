import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-player-smartphone_svg__a"
      d="M10.305 15.352a.54.54 0 01-.807-.468V8.116a.54.54 0 01.807-.468l5.921 3.384a.539.539 0 010 .936zM9.498 2.5h5"
    />,
    <rect
      className="video-player-smartphone_svg__a"
      x={3.5}
      y={0.5}
      width={17}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="video-player-smartphone_svg__a"
      d="M20.498 19.5H3.502M12 21a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25A.25.25 0 0112 21"
    />
  );

export default SvgVideoPlayerSmartphone;
