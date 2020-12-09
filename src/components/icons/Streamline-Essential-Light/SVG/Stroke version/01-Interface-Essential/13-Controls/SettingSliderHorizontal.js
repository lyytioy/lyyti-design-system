import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingSliderHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".setting-slider-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="setting-slider-horizontal_svg__a"
      d="M9.5 16a2 2 0 01-4 0V8a2 2 0 014 0zM11.5 12.001h12M.5 12.001h3"
    />
  );

export default SvgSettingSliderHorizontal;
