import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandHorizontal2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-horizontal-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-horizontal-2_svg__a"
      d="M.75 11.999h22.5M4.5 8.249l-3.75 3.75 3.75 3.75M19.5 8.249l3.75 3.75-3.75 3.75M12 .749v22.5"
    />
  );

export default SvgExpandHorizontal2;
