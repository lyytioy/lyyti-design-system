import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-arrows_svg__a"
      d="M5.25 14.248v4.5H.75M18.75 9.748v-4.5h4.5M19.032 5.245A9.752 9.752 0 018.246 21M4.967 18.751A9.753 9.753 0 0115.754 3"
    />
  );

export default SvgButtonRefreshArrows;
