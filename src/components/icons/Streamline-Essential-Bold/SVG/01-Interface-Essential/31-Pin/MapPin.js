import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMapPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".map-pin_svg__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="map-pin_svg__cls-1"
      d="M9.71 1a9.25 9.25 0 019.56 9c.14 3.95-5.13 11.65-7.53 15a1.54 1.54 0 01-2.16.33 1.6 1.6 0 01-.27-.33C6.69 21.87.91 14.54.78 10.59A9.24 9.24 0 019.71 1z"
      transform="translate(-.02 -.27)"
    />,
    <circle className="map-pin_svg__cls-1" cx={9.98} cy={9.73} r={4} />
  );

export default SvgMapPin;
