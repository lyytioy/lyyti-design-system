import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraHolder = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-holder_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-holder_svg__a"
      d="M17.5 11a1 1 0 01-1 1h-10V4a1 1 0 011-1h9a1 1 0 011 1zM17.5 5h3v3h-3zM2.6 6h3.9v3H2.6M23.5 8.127a1 1 0 01-1.553.833L20.5 8V5l1.444-.967a1 1 0 011.556.831z"
    />,
    <path
      className="camera-holder_svg__a"
      d="M2.291 9.514a1 1 0 01-.857.486H1a.5.5 0 01-.5-.5v-4A.5.5 0 011 5h.434a1 1 0 01.857.486l.592.985a2 2 0 010 2.058zM13.5 12v1a1.5 1.5 0 01-1.5 1.5A2.5 2.5 0 009.5 17v2.5a1.5 1.5 0 01-3 0V12"
    />,
    <circle className="camera-holder_svg__a" cx={10} cy={6.5} r={1.5} />,
    <path className="camera-holder_svg__a" d="M15.5 10h-2" />
  );

export default SvgCameraHolder;
