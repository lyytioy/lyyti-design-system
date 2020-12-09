import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCameraArchive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-camera-archive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-edit-camera-archive_svg__a"
      x={12.75}
      y={12}
      width={10.5}
      height={11.25}
      rx={1}
      ry={1}
    />,
    <path
      className="video-edit-camera-archive_svg__a"
      d="M17.25 12v7.5M15.75 15h3M15.75 18h3M3.75 5.625A.375.375 0 113.375 6a.375.375 0 01.375-.375"
    />,
    <path
      className="video-edit-camera-archive_svg__a"
      d="M17.25 9V4.5a1.5 1.5 0 00-1.5-1.5h-3l-.408-1.224A1.5 1.5 0 0010.919.75H7.081a1.5 1.5 0 00-1.423 1.026L5.25 3h-3a1.5 1.5 0 00-1.5 1.5v8.25a1.5 1.5 0 001.5 1.5h7.5"
    />,
    <circle
      className="video-edit-camera-archive_svg__a"
      cx={9}
      cy={8.25}
      r={3}
    />
  );

export default SvgVideoEditCameraArchive;
