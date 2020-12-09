import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-vertical_svg__a,.settings-vertical_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}.settings-vertical_svg__b{fill-rule:evenodd}"
        }
      </style>
    </defs>,
    <rect
      className="settings-vertical_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="settings-vertical_svg__a"
      d="M15.75 11.265v-6M15.75 18.765v-3"
    />,
    <path
      className="settings-vertical_svg__b"
      d="M18 13.515a2.25 2.25 0 11-2.25-2.25 2.25 2.25 0 012.25 2.25z"
    />,
    <path className="settings-vertical_svg__a" d="M8.25 9.765v9" />,
    <path
      className="settings-vertical_svg__b"
      d="M10.5 7.515a2.25 2.25 0 10-2.25 2.25 2.25 2.25 0 002.25-2.25z"
    />
  );

export default SvgSettingsVertical;
