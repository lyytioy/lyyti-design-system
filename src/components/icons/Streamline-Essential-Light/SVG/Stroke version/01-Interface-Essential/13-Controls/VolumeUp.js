import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeUp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-up_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="volume-up_svg__a" cx={12} cy={12.001} r={7.5} />,
    <path
      className="volume-up_svg__a"
      d="M5.23 20.027A10.5 10.5 0 1122.5 12M23.5 12.001h-2M6 19.001l-1.5 2"
    />,
    <circle className="volume-up_svg__a" cx={13.75} cy={8.251} r={1.25} />
  );

export default SvgVolumeUp;
