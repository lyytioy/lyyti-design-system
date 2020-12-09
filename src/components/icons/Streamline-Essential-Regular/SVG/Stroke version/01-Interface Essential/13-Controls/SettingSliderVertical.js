import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingSliderVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".setting-slider-vertical_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M15.751 15A3.751 3.751 0 1112 11.25 3.75 3.75 0 0115.751 15z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="setting-slider-vertical_svg__b"
      d="M12.001 23.25v-1.5M12.001 8.25V.75"
    />
  );

export default SvgSettingSliderVertical;
