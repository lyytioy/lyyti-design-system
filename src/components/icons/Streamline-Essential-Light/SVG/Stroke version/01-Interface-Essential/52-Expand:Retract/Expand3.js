import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="expand-3_svg__a"
      d="M8.5 15.499l-8 8M5.5 23.499h-5v-5M15.5 8.499l8-8M18.5.499h5v5"
    />
  );

export default SvgExpand3;
