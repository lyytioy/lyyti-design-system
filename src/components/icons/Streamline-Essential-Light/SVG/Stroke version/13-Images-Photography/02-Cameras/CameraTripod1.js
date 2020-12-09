import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraTripod1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-tripod-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-tripod-1_svg__a"
      d="M18 2.5a.889.889 0 01-.724-.447L16.724.947A.889.889 0 0016 .5h-4a.889.889 0 00-.724.447l-.552 1.106A.889.889 0 0110 2.5H7.5a1 1 0 00-1 1v6a1 1 0 001 1h11a1 1 0 001-1v-6a1 1 0 00-1-1z"
    />,
    <circle className="camera-tripod-1_svg__a" cx={14} cy={6} r={2.5} />,
    <path
      className="camera-tripod-1_svg__a"
      d="M13.5 12.5v11M11.5 12.5h4M19.5 23.5l-6-8-6 8M13.5 14.5h-4M9.015 13.879a.64.64 0 010 1.242l-1.03.258A4.087 4.087 0 017 15.5H5.5a1 1 0 010-2H7a4.087 4.087 0 01.985.121z"
    />
  );

export default SvgCameraTripod1;
