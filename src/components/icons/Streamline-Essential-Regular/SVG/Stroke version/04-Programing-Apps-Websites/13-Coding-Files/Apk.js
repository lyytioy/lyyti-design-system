import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".apk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="apk_svg__a"
      d="M1.488 3.754h21M1.488 20.254h21M4.488 15.754v-6a1.5 1.5 0 013 0v6M4.488 12.754h3M10.488 15.754v-7.5M10.488 8.254h.75a2.25 2.25 0 010 4.5h-.75M16.488 15.754v-7.5M19.488 15.754l-3-3.75 3-3.75"
    />
  );

export default SvgApk;
