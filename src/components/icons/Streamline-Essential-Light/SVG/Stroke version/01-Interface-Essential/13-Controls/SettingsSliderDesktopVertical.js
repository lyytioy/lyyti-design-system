import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSliderDesktopVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider-desktop-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="settings-slider-desktop-vertical_svg__a"
      cx={6.5}
      cy={10.001}
      r={1.5}
    />,
    <circle
      className="settings-slider-desktop-vertical_svg__a"
      cx={12}
      cy={7.001}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-vertical_svg__a"
      d="M6.5 11.501v2M12 3.501v2M6.5 8.501v-5"
    />,
    <circle
      className="settings-slider-desktop-vertical_svg__a"
      cx={17.5}
      cy={10.001}
      r={1.5}
    />,
    <path
      className="settings-slider-desktop-vertical_svg__a"
      d="M17.5 11.501v2M17.5 8.501v-5M12 13.501v-5M9.138 23.5a7.486 7.486 0 001.362-4M14.862 23.5a7.486 7.486 0 01-1.362-4M7.5 23.501h9M.5 16.501h23"
    />,
    <rect
      className="settings-slider-desktop-vertical_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={19}
      rx={1}
      ry={1}
    />
  );

export default SvgSettingsSliderDesktopVertical;
