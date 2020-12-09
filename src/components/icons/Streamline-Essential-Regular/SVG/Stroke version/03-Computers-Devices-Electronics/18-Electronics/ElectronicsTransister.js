import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsTransister = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-transister_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-transister_svg__a"
      d="M18 12.75H6V2.25A1.5 1.5 0 017.5.75h9a1.5 1.5 0 011.5 1.5zM4.5 12.75h15M12 23.25v-10.5M7.5 23.25v-10.5M16.5 12.75v10.5"
    />
  );

export default SvgElectronicsTransister;
