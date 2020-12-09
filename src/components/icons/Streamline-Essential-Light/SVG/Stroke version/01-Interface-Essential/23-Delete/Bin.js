import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bin_svg__a"
      d="M20.5 3.5v19a1 1 0 01-1 1h-15a1 1 0 01-1-1v-19M7.5 3.5v-2a1 1 0 011-1h7a1 1 0 011 1v2M.5 3.5h23M7.5 7v12M12 7v12M16.5 7v12"
    />
  );

export default SvgBin;
