import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsLedLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-LED-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-LED-light_svg__a"
      d="M3.75 15.75h16.5M18.75 7.5a6.75 6.75 0 00-13.5 0v8.25h13.5zM12 15.75v-4.5"
    />,
    <path
      className="electronics-LED-light_svg__a"
      d="M9.75 9L12 11.25 14.25 9M8.25 15.75v7.5M15.75 15.75v7.5"
    />
  );

export default SvgElectronicsLedLight;
