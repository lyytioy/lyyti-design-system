import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-flash_svg__a"
      d="M8.25 8.237h-6a1.5 1.5 0 00-1.5 1.5v11.511a2 2 0 002 2h8a2 2 0 002-2v-6.261"
    />,
    <circle
      className="vintage-camera-flash_svg__a"
      cx={17.25}
      cy={6.75}
      r={6}
    />,
    <circle
      className="vintage-camera-flash_svg__a"
      cx={17.25}
      cy={6.75}
      r={1.5}
    />,
    <circle
      className="vintage-camera-flash_svg__a"
      cx={6.75}
      cy={13.487}
      r={2.25}
    />,
    <circle
      className="vintage-camera-flash_svg__a"
      cx={6.75}
      cy={17.987}
      r={2.25}
    />,
    <path
      className="vintage-camera-flash_svg__a"
      d="M12.75 17.987h3M18.75 12.561v9.176a1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5v-9.176"
    />
  );

export default SvgVintageCameraFlash;
