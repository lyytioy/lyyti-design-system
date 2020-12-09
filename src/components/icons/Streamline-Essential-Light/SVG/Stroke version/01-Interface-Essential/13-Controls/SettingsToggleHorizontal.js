import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsToggleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-toggle-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-toggle-horizontal_svg__a"
      x={0.503}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="settings-toggle-horizontal_svg__a"
      d="M3.5 6.5a3 3 0 003 3h11a3 3 0 000-6h-11a3 3 0 00-3 3zM3.5 17.5a3 3 0 003 3h11a3 3 0 000-6h-11a3 3 0 00-3 3z"
    />,
    <circle
      className="settings-toggle-horizontal_svg__a"
      cx={6.503}
      cy={6.5}
      r={3}
    />,
    <circle
      className="settings-toggle-horizontal_svg__a"
      cx={17.503}
      cy={17.5}
      r={3}
    />
  );

export default SvgSettingsToggleHorizontal;
