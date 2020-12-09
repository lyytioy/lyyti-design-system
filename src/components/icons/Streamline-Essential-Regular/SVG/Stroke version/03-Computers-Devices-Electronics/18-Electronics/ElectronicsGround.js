import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsGround = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-ground_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-ground_svg__a"
      d="M12 .75v13.5M3.75 17.25h16.5M6.75 20.25h10.5M9.75 23.25h4.5M.75 14.25h22.5"
    />
  );

export default SvgElectronicsGround;
