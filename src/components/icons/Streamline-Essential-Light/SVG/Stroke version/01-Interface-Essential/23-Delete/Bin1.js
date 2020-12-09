import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bin-1_svg__a"
      d="M21 4.5l-1.812 17.209A2 2 0 0117.2 23.5H6.8a2 2 0 01-1.989-1.791L3 4.5M.5 4.5h23M7.5 4.5v-3a1 1 0 011-1h7a1 1 0 011 1v3M12 9v10.5M16.5 9L16 19.5M7.5 9L8 19.5"
    />
  );

export default SvgBin1;
