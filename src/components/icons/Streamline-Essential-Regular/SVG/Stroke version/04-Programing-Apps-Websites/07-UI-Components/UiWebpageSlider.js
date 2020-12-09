import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-slider_svg__a"
      d="M14.077 18.75H6.75a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5v11.206M5.25 17.25h-3a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h3M18.75 2.25h3a1.5 1.5 0 011.5 1.5v12M8.25 4.5h7.5M8.25 8.25h7.5M8.25 12h3M16.356 16.356l2.651 6.894 1.591-2.652 2.652-1.591-6.894-2.651zM23.25 23.25l-2.652-2.652"
    />
  );

export default SvgUiWebpageSlider;
