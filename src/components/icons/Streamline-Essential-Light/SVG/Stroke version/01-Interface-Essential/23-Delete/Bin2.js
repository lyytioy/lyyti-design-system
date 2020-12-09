import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBin2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bin-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="bin-2_svg__a"
      d="M.5 6.507h23M20.5 6.5v15a2 2 0 01-2 2h-13a2 2 0 01-2-2v-15M2.5 6.5v-1a2 2 0 012-2h15a2 2 0 012 2v1M9 3.5a3 3 0 016 0M12 10v9.5M16.5 10v9.5M7.5 10v9.5"
    />
  );

export default SvgBin2;
