import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraSmall = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-small_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-small_svg__a"
      d="M12.5 9.5a1 1 0 001 1h8a2.005 2.005 0 002-2v-4a2.005 2.005 0 00-2-2h-8a1 1 0 00-1 1zM10.5 6.5h2"
    />,
    <circle className="camera-small_svg__a" cx={5.5} cy={5.5} r={3} />,
    <path
      className="camera-small_svg__a"
      d="M8.5 12v10.5a1 1 0 01-1 1h-3a4.012 4.012 0 01-4-4v-15a4.012 4.012 0 014-4h2a4.012 4.012 0 014 4V11a1 1 0 01-1 1h-1"
    />
  );

export default SvgCameraSmall;
