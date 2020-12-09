import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="shrink-3_svg__a"
      d="M13.5 10.499l10-10M.5 23.499l10-10M20.5 10.499h-7v-7M10.5 20.499v-7h-7"
    />
  );

export default SvgShrink3;
