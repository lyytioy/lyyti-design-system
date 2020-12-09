import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlUp2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-up-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-up-2_svg__a"
      d="M14.25 8.25v-6a1.5 1.5 0 00-2.4-1.2l-6.6 4.2h-3a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3l2.95 1.88"
    />,
    <circle
      className="volume-control-up-2_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="volume-control-up-2_svg__a"
      d="M17.25 14.25v6M14.25 17.25h6"
    />
  );

export default SvgVolumeControlUp2;
