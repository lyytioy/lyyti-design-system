import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsGround = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-ground_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-ground_svg__a"
      d="M12 1v13M.5 14h23M3.5 17h17M6.5 20h11M9.5 23h5"
    />
  );

export default SvgElectronicsGround;
