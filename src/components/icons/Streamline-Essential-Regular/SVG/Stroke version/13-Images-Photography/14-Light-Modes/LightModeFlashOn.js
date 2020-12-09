import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeFlashOn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-flash-on_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="light-mode-flash-on_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="light-mode-flash-on_svg__a"
      d="M10.308 5.25h4.978a.75.75 0 01.671 1.085L14.25 9.75h3l-7.5 10.5.75-7.5H8.508a.75.75 0 01-.718-.966l1.8-6a.749.749 0 01.718-.534z"
    />
  );

export default SvgLightModeFlashOn;
