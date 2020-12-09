import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefresh = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh_svg__a"
      d="M23.25 17.248h-15a1.5 1.5 0 01-1.5-1.5v-15"
    />,
    <path
      className="button-refresh_svg__a"
      d="M17.25 14.248v-6a1.5 1.5 0 00-1.5-1.5h-6M3.75 3.748l3-3 3 3M20.25 20.248l-3 3-3-3M.75 6.748h3"
    />
  );

export default SvgButtonRefresh;
