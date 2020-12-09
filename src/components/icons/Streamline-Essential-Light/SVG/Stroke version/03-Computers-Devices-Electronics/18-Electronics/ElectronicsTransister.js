import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsTransister = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-transister_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-transister_svg__a"
      d="M7 .5h10a1 1 0 011 1v10H6v-10a1 1 0 011-1zM5 11.5h14M12 11.5v12M8 11.5v12M16 11.5v12"
    />
  );

export default SvgElectronicsTransister;
