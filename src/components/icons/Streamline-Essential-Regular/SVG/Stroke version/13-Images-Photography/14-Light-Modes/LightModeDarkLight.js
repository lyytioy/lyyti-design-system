import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeDarkLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-dark-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-dark-light_svg__a"
      d="M12 5.25V.75M7.227 7.227L4.045 4.045M5.25 12H.75M7.227 16.773l-3.182 3.182M12 18.75v4.5M16.773 16.773l3.182 3.182M18.75 12h4.5M16.773 7.227l3.182-3.182"
    />,
    <circle
      className="light-mode-dark-light_svg__a"
      cx={12}
      cy={12}
      r={6.75}
    />,
    <path
      className="light-mode-dark-light_svg__a"
      d="M15.75 15a6.752 6.752 0 01-6.265-9.265 6.751 6.751 0 108.78 8.78A6.716 6.716 0 0115.75 15z"
    />
  );

export default SvgLightModeDarkLight;
