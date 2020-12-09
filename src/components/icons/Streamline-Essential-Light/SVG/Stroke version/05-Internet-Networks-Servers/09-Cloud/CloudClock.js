import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudClock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-clock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cloud-clock_svg__a"
      d="M20.5 13.907A4.313 4.313 0 0023 9.858a4.711 4.711 0 00-4.954-4.635A6.707 6.707 0 0012 1.5a6.605 6.605 0 00-6.675 6.109A3.561 3.561 0 001 11.018 3.186 3.186 0 003.5 14.3"
    />,
    <circle className="cloud-clock_svg__a" cx={12} cy={16.501} r={6} />,
    <path className="cloud-clock_svg__a" d="M14 16.501h-2v-3" />
  );

export default SvgCloudClock;
