import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlCheck1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-control-check-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="volume-control-check-1_svg__a"
      d="M14.25 8.25v-6a1.5 1.5 0 00-1.5-1.5 7.5 7.5 0 00-6.867 4.5H2.25a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 001.5 1.5h3.633a7.548 7.548 0 002.25 2.9"
    />,
    <circle
      className="volume-control-check-1_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="volume-control-check-1_svg__a"
      d="M19.924 15.506l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgVolumeControlCheck1;
