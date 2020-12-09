import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCrossOver = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cross-over_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cross-over_svg__a"
      d="M21.496 8.503v-6h-5.958M2.059 21.941L21.496 2.503M15.496 22.503h6v-5.947M13.493 14.51l8.003 8.004M2.059 3.076l7.447 7.447"
    />
  );

export default SvgCrossOver;
