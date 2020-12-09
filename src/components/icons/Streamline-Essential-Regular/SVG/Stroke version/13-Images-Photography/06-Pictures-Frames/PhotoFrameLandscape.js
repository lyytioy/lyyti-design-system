import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhotoFrameLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".photo-frame-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="photo-frame-landscape_svg__a"
      d="M21.75 23.25H8.068a1.5 1.5 0 01-1.5-1.388l-2.961-19.5A1.5 1.5 0 015.1.75h13.685a1.5 1.5 0 011.5 1.388l2.965 19.5a1.5 1.5 0 01-1.5 1.612zM5.15 12.512L.75 23.25"
    />,
    <path
      className="photo-frame-landscape_svg__a"
      d="M7.236 3.75l2.44 16.5h9.941l-2.441-16.5h-9.94z"
    />,
    <path
      className="photo-frame-landscape_svg__a"
      d="M12.867 20.25l2.75-4.4a1.5 1.5 0 012.333-.266l1.15 1.151M11.176 10.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgPhotoFrameLandscape;
