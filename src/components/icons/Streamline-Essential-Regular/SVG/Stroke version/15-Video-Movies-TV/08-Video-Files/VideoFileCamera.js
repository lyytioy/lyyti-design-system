import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileCamera = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-camera_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-file-camera_svg__a"
      d="M22.5 21.75a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5V2.25A1.5 1.5 0 013 .75h15.045a1.5 1.5 0 011.048.426l2.954 2.883a1.5 1.5 0 01.453 1.074z"
    />,
    <path
      className="video-file-camera_svg__a"
      d="M17.689 10.932a.751.751 0 00-.676-.1L13.5 12v-.75a1.5 1.5 0 00-1.5-1.5H7.5a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5H12a1.5 1.5 0 001.5-1.5V15l3.513 1.171a.749.749 0 00.987-.712v-3.918a.751.751 0 00-.311-.609z"
    />
  );

export default SvgVideoFileCamera;
