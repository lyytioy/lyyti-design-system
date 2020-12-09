import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeFlashAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-flash-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-flash-auto_svg__a"
      d="M14.25 23.025a11.238 11.238 0 118.775-8.775M10.05 5.25h4.979a.75.75 0 01.671 1.085L13.992 9.75h3l-7.5 10.5.75-7.5H8.25a.75.75 0 01-.718-.966l1.8-6a.749.749 0 01.718-.534z"
    />,
    <path
      className="light-mode-flash-auto_svg__a"
      d="M17.25 21.75v-6a1.5 1.5 0 013 0v6M17.25 18.75h3"
    />
  );

export default SvgLightModeFlashAuto;
