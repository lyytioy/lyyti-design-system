import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeCloudy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-cloudy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-cloudy_svg__a"
      d="M.75 14.036a4.976 4.976 0 015.067-5.081A6.83 6.83 0 0112 4.875a6.963 6.963 0 016.827 6.7 3.71 3.71 0 014.423 3.735c0 3.878-3.913 3.817-3.913 3.817H5.152A5.11 5.11 0 01.75 14.036zM12 19.125l2.25-3.75M16.5 19.125l2.25-3.75"
    />
  );

export default SvgLightModeCloudy;
