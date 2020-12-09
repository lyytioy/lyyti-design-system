import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSliderDesktopVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider-desktop-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="settings-slider-desktop-vertical_svg__a"
      cx={8.25}
      cy={9.765}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-vertical_svg__a"
      d="M8.251 8.265V3.811M8.251 12.765v-1.5"
    />,
    <circle
      className="settings-slider-desktop-vertical_svg__a"
      cx={15.75}
      cy={6.765}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-vertical_svg__a"
      d="M15.751 8.265v4.502M15.751 3.765v1.502M13.5 18.75a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.751 23.25h10.5M.751 15.75h22.5"
    />,
    <rect
      className="settings-slider-desktop-vertical_svg__a"
      x={0.751}
      y={0.75}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSettingsSliderDesktopVertical;
