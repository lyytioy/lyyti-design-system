import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingSliderVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".setting-slider-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="setting-slider-vertical_svg__a"
      d="M16 14.5a2 2 0 010 4H8a2 2 0 110-4zM12 12.501v-12M12 23.501v-3"
    />
  );

export default SvgSettingSliderVertical;
