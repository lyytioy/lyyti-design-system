import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-arrow_svg__a"
      d="M6 14.248v4.5H1.5M5.717 18.751A9.753 9.753 0 0116.5 3M5.712 18.746A9.72 9.72 0 119 21"
    />
  );

export default SvgButtonRefreshArrow;
