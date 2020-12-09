import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSliderDesktopHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider-desktop-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="settings-slider-desktop-horizontal_svg__a"
      cx={9.75}
      cy={5.25}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-horizontal_svg__a"
      d="M11.251 5.25h7.5M5.251 5.25h3"
    />,
    <circle
      className="settings-slider-desktop-horizontal_svg__a"
      cx={14.25}
      cy={11.25}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-horizontal_svg__a"
      d="M12.751 11.25h-7.5M18.751 11.25h-3M13.5 18.75a8.934 8.934 0 001.5 4.5H9a8.934 8.934 0 001.5-4.5M6.751 23.25h10.5M.751 15.75h22.5"
    />,
    <rect
      className="settings-slider-desktop-horizontal_svg__a"
      x={0.751}
      y={0.75}
      width={22.5}
      height={18}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgSettingsSliderDesktopHorizontal;
