import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVintageCameraFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".vintage-camera-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="vintage-camera-flash_svg__a"
      d="M7.5 8.5h-6a1 1 0 00-1 1v12a2 2 0 002 2h8a2 2 0 002-2v-5.509"
    />,
    <path
      className="vintage-camera-flash_svg__a"
      d="M10.5 13.991V19.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-11"
    />,
    <circle className="vintage-camera-flash_svg__a" cx={6.5} cy={16.5} r={2} />,
    <circle className="vintage-camera-flash_svg__a" cx={6.5} cy={12.5} r={2} />,
    <circle className="vintage-camera-flash_svg__a" cx={16.5} cy={7.5} r={7} />,
    <circle
      className="vintage-camera-flash_svg__a"
      cx={16.5}
      cy={7.5}
      r={1.5}
    />,
    <path
      className="vintage-camera-flash_svg__a"
      d="M12.5 18.491l2.5.009M18 14.339v7.652a1.5 1.5 0 01-3 0v-7.652"
    />
  );

export default SvgVintageCameraFlash;
