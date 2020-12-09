import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeFlashAuto = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-flash-auto_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="light-mode-flash-auto_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="light-mode-flash-auto_svg__a"
      d="M11.525 15.586L7.307 20.2l3.14-7.7H7.222a.273.273 0 01-.262-.439l4.412-8.122a.928.928 0 01.738-.439h3.54c.275 0 .382.191.237.425L12.426 9.5h4.663"
    />,
    <path
      className="light-mode-flash-auto_svg__a"
      d="M13.5 19.507v-6a2 2 0 114 0v6M13.5 15.507h4"
    />
  );

export default SvgLightModeFlashAuto;
