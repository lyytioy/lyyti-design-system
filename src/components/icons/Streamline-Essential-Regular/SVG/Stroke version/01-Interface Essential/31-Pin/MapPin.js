import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMapPin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".map-pin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M11.71.67C17.12.48 21.64 4.2 21.8 9c.13 3.68-5.49 10.9-8 14a1.78 1.78 0 01-2.28.32 1.37 1.37 0 01-.29-.24c-2.76-2.9-8.86-9.73-9-13.42C2 4.87 6.29.85 11.71.67z"
      className="map-pin_svg__a"
    />,
    <circle cx={12} cy={10} r={3.5} className="map-pin_svg__a" />
  );

export default SvgMapPin;
