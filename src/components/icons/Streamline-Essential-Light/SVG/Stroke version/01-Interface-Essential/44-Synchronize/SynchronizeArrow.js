import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrow_svg__a"
      d="M.5 8.997l3 4.5 3.5-4M3.531 13.434a9.836 9.836 0 11.844 2.556"
    />
  );

export default SvgSynchronizeArrow;
