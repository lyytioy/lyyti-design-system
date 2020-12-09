import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-horizontal_svg__a"
      x={0.5}
      y={0.501}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="settings-horizontal_svg__a" cx={12} cy={5.501} r={2} />,
    <path
      className="settings-horizontal_svg__a"
      d="M13.998 5.501h6.523M3.521 5.501h6.475"
    />,
    <circle className="settings-horizontal_svg__a" cx={8} cy={12.001} r={2} />,
    <path
      className="settings-horizontal_svg__a"
      d="M9.996 12.001h10.525M3.521 12.001h2.475"
    />,
    <circle className="settings-horizontal_svg__a" cx={10} cy={18.501} r={2} />,
    <path
      className="settings-horizontal_svg__a"
      d="M11.996 18.501h8.525M3.521 18.501H8"
    />
  );

export default SvgSettingsHorizontal;
