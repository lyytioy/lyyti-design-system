import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraTripod1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-tripod-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="camera-tripod-1_svg__a"
      d="M12 14.982v8.268M9.75 14.982h4.5M15.75 23.25L12 19.5l-3.75 3.75M12 17.982H7.5M8.526 2.25L10.1.75h3.775l1.574 1.5h1.57a1.812 1.812 0 011.731 1.742v6.437a1.654 1.654 0 01-1.731 1.553H6.981a1.654 1.654 0 01-1.731-1.553V3.992A1.812 1.812 0 016.981 2.25h1.545"
    />,
    <circle className="camera-tripod-1_svg__a" cx={12} cy={6.732} r={2.25} />,
    <path className="camera-tripod-1_svg__a" d="M7.5 17.232v1.5" />
  );

export default SvgCameraTripod1;
