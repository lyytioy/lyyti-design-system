import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrow-1_svg__a"
      d="M13.5 22a9.75 9.75 0 10-9.75-9.75V13"
    />,
    <path className="synchronize-arrow-1_svg__a" d="M.75 9.997l3 3 3-3" />
  );

export default SvgSynchronizeArrow1;
