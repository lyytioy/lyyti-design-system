import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatellite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="satellite_svg__a"
      d="M7.95 15.551a10.933 10.933 0 0014.688.672 1 1 0 00.067-1.481L8.625.789a1 1 0 00-1.481.08 10.931 10.931 0 00.806 14.682zM17.586 5.913L15.699 7.8"
    />,
    <circle className="satellite_svg__a" cx={19} cy={4.499} r={2} />,
    <path
      className="satellite_svg__a"
      d="M7.873 15.473l-5.527 6.371A1 1 0 003.1 23.5h9.6a1 1 0 00.752-1.659zM19.5 6.436v5.13M17.063 3.999h-5.199"
    />
  );

export default SvgSatellite;
