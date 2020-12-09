import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRefreshArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-refresh-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-refresh-arrows_svg__a"
      d="M5.5 18.928A9.5 9.5 0 0117.061 3.956M18.5 9.498v-4.5H23"
    />,
    <path
      className="button-refresh-arrows_svg__a"
      d="M5.5 14.498v4.5H1M18.5 5.071A9.5 9.5 0 016.883 20.006"
    />
  );

export default SvgButtonRefreshArrows;
