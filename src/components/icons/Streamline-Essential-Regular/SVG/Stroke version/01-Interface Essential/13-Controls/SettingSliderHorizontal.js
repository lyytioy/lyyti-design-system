import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingSliderHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".setting-slider-horizontal_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M9 16.25a3.75 3.75 0 113.75-3.75A3.75 3.75 0 019 16.25z"
      fillRule="evenodd"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />,
    <path
      className="setting-slider-horizontal_svg__b"
      d="M.751 12.5h1.5M15.751 12.5h7.5"
    />
  );

export default SvgSettingSliderHorizontal;
