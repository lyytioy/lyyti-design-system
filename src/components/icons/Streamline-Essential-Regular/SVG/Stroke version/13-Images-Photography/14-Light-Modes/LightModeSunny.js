import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunny = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-sunny_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="light-mode-sunny_svg__a" cx={12} cy={12} r={4.5} />,
    <path
      className="light-mode-sunny_svg__a"
      d="M12 .75V4.5M12 19.5v3.75M23.25 12H19.5M4.5 12H.75M20.25 3.75l-3 3M6.75 17.25l-3 3M20.25 20.25l-3-3M6.75 6.75l-3-3"
    />
  );

export default SvgLightModeSunny;
