import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="synchronize-arrow-1_svg__a" d="M.5 8.992l3 4.5 3.5-4" />,
    <path
      className="synchronize-arrow-1_svg__a"
      d="M13 21.5A9.5 9.5 0 103.5 12v1.494"
    />
  );

export default SvgSynchronizeArrow1;
