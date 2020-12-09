import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSatellite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".satellite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="satellite_svg__a"
      d="M20.828 14.357A8.25 8.25 0 019.161 2.689zM21.359 5.341a2.25 2.25 0 110-3.182 2.249 2.249 0 010 3.182zM18.177 5.341l-3.182 3.182M3.25 22.522l4.243-4.242a1.5 1.5 0 012.121 0l4.243 4.242"
    />
  );

export default SvgSatellite;
