import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-slider_svg__a,.settings-slider_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.settings-slider_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <rect
      className="settings-slider_svg__a"
      x={0.751}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="settings-slider_svg__a"
      d="M12.751 15.75h6M5.251 15.75h3"
    />,
    <path
      className="settings-slider_svg__b"
      d="M12.751 15.75A2.25 2.25 0 1110.5 13.5a2.25 2.25 0 012.251 2.25z"
    />,
    <path className="settings-slider_svg__a" d="M14.251 8.25h-9" />,
    <path
      className="settings-slider_svg__b"
      d="M18.751 8.25A2.25 2.25 0 1016.5 10.5a2.251 2.251 0 002.251-2.25z"
    />
  );

export default SvgSettingsSlider;
