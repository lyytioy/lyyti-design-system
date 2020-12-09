import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-refresh_svg__a"
      d="M17.5 8.917v-3a1 1 0 00-.293-.707L12.794.793A1 1 0 0012.087.5H1.5a1 1 0 00-1 1v8h1v3h-1v10a1 1 0 001 1h8.459M4.502 3.5v5M7.502 3.5v5M10.502 3.5v5M13.502 5.5v4M19 15.5h4.5V11M23.158 15.5a6 6 0 10-.968 5.742"
    />
  );

export default SvgSdCardRefresh;
