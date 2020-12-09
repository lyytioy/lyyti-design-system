import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTakingPicturesCameras = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".taking-pictures-cameras_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="taking-pictures-cameras_svg__a"
      d="M15.75 12.75H13.5l-1.5-3H6l-1.5 3H2.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5z"
    />,
    <circle
      className="taking-pictures-cameras_svg__a"
      cx={9}
      cy={17.25}
      r={3}
    />,
    <path
      className="taking-pictures-cameras_svg__a"
      d="M20.25 14.25h1.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H19.5l-1.5-3h-6l-1.5 3H8.25a1.5 1.5 0 00-1.5 1.5v1.5M12.435 6.693a3 3 0 114.549 3.807"
    />
  );

export default SvgTakingPicturesCameras;
