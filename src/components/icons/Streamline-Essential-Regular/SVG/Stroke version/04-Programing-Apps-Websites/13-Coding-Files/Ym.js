import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgYm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ym_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ym_svg__a"
      d="M.738 3.754h22.5M.738 20.254h22.5M6.738 8.254V10.5a1.5 1.5 0 003 0V8.254M8.238 12.004v3.75M17.238 15.754v-7.5l-2.25 3.75-2.25-3.75v7.5"
    />
  );

export default SvgYm;
