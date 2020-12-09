import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-arrow_svg__a"
      d="M5.573 14.499v4.5h-4M5.573 19a9.5 9.5 0 112.47 1.639"
    />
  );

export default SvgButtonRefreshArrow;
