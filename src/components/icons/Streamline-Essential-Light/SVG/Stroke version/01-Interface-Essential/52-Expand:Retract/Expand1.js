import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-1_svg__a"
      d="M15.5 8.499l8-8M.5 23.499l8-8M5.5 23.499h-5v-5M23.5 5.499v-5h-5M15.5 15.499l8 8M.5.499l8 8M.5 5.499v-5h5M18.5 23.499h5v-5"
    />
  );

export default SvgExpand1;
