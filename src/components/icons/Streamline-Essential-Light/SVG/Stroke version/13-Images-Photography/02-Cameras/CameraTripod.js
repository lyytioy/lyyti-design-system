import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraTripod = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-tripod_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-tripod_svg__a"
      d="M12 17.5v6M6 23.5l6-5.5M18 23.5L12 18M13 12.5V17a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-4.5M9 12.5h6M18 9.5a1 1 0 01-1 1H7a1 1 0 01-1-1v-6a1 1 0 011-1h4c.281-.562.451-1 1.118-1h2.264c.667 0 .837.438 1.118 1H17a1 1 0 011 1z"
    />,
    <circle className="camera-tripod_svg__a" cx={13} cy={6.5} r={2} />,
    <path className="camera-tripod_svg__a" d="M7.5.5h1" />
  );

export default SvgCameraTripod;
