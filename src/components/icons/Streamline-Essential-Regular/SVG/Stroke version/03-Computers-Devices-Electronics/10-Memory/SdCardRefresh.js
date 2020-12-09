import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSdCardRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sd-card-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="sd-card-refresh_svg__a"
      d="M9.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-10.5h1.5v-3H.75v-6a1.5 1.5 0 011.5-1.5h10.56a1.5 1.5 0 011.139.524l4.44 4.305a1.5 1.5 0 01.361.976V7.5M6.75 3.75v3M11.25 3.75v3M19.5 15.75h3.75v-4.5M23.061 15.75a6 6 0 10-1.121 5.243"
    />
  );

export default SvgSdCardRefresh;
