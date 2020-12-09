import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeDarkLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-dark-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="light-mode-dark-light_svg__a" cx={12} cy={12} r={6} />,
    <path
      className="light-mode-dark-light_svg__a"
      d="M10.457 6.2a6 6 0 007.086 8.1M12 1v5M19.778 4.222l-3.535 3.535M23 12h-5M19.778 19.778l-3.535-3.535M12 23v-5M4.222 19.778l3.535-3.535M1 12h5M4.222 4.222l3.535 3.535M4 12h2"
    />
  );

export default SvgLightModeDarkLight;
