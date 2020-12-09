import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoEditCameraArchive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-edit-camera-archive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-edit-camera-archive_svg__a"
      d="M17.5 8V4.182A1.671 1.671 0 0016 2.5h-2.987a.5.5 0 01-.338-.131L10.779.631A.5.5 0 0010.441.5H7.559a.5.5 0 00-.338.131l-1.9 1.738a.5.5 0 01-.338.131H2A1.671 1.671 0 00.5 4.182V13A1.5 1.5 0 002 14.5h7.5"
    />,
    <circle
      className="video-edit-camera-archive_svg__a"
      cx={9}
      cy={8}
      r={3.5}
    />,
    <path
      className="video-edit-camera-archive_svg__a"
      d="M3.237 5.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <rect
      className="video-edit-camera-archive_svg__a"
      x={12.5}
      y={11.5}
      width={11}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="video-edit-camera-archive_svg__a"
      d="M16.5 11.5V21M15 13.5h3M15 16.5h3M15 19.5h3"
    />
  );

export default SvgVideoEditCameraArchive;
