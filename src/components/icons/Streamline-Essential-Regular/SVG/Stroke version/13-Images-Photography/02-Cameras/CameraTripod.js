import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraTripod = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-tripod_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-tripod_svg__a"
      d="M15.15 3L14.1.75H9.9L8.85 3H6.3a1.05 1.05 0 00-1.05 1.05v6.9A1.05 1.05 0 006.3 12h11.4a1.05 1.05 0 001.05-1.05v-6.9A1.05 1.05 0 0017.7 3zM17.25 23.25L12 14.85l-5.25 8.4M12 12v11.25"
    />,
    <circle className="camera-tripod_svg__a" cx={12} cy={7.125} r={2.25} />
  );

export default SvgCameraTripod;
