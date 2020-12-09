import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsLedLight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-LED-light_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-LED-light_svg__a"
      d="M18 14.5H6v-8a6 6 0 0112 0zM5 14.5h14M9 14.5v9M15 14.5v9M12 14.5v-5M10 7.5l2 2M14 7.5l-2 2"
    />
  );

export default SvgElectronicsLedLight;
