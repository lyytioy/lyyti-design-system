import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSliderDesktopHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider-desktop-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="settings-slider-desktop-horizontal_svg__a"
      cx={8}
      cy={6.501}
      r={1.5}
    />,
    <circle
      className="settings-slider-desktop-horizontal_svg__a"
      cx={16}
      cy={11.501}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-horizontal_svg__a"
      d="M4.5 6.501h2M9.5 6.501h10M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.501h9M.5 16.501h23"
    />,
    <rect
      className="settings-slider-desktop-horizontal_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />,
    <path
      className="settings-slider-desktop-horizontal_svg__a"
      d="M14.5 11.501h-10M17.5 11.501h2"
    />
  );

export default SvgSettingsSliderDesktopHorizontal;
