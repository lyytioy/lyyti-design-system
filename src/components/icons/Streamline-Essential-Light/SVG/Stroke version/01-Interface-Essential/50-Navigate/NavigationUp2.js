import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUp2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-up-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="navigation-up-2_svg__a"
      d="M12 .498v20M18 4.998l-6-4.5-6 4.5M8 23.498h8M8 20.498h8"
    />
  );

export default SvgNavigationUp2;
