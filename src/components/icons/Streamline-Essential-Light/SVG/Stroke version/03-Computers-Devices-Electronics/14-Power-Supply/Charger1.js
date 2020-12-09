import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCharger1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".charger-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="charger-1_svg__a"
      d="M4 7.5h16M18 7.5v7a4.012 4.012 0 01-4 4h-4a4.012 4.012 0 01-4-4v-7M14 20.5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2h4zM12 21.5v2M8 7.5v-7M16 7.5v-7"
    />
  );

export default SvgCharger1;
