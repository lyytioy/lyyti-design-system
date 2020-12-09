import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsToggleVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-toggle-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="settings-toggle-vertical_svg__a"
      x={1.501}
      y={0.75}
      width={9}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="settings-toggle-vertical_svg__a" d="M1.501 6h9" />,
    <circle
      className="settings-toggle-vertical_svg__a"
      cx={6.001}
      cy={18.75}
      r={1.5}
    />,
    <rect
      className="settings-toggle-vertical_svg__a"
      x={13.501}
      y={0.75}
      width={9}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="settings-toggle-vertical_svg__a" d="M13.501 14.25h9" />,
    <circle
      className="settings-toggle-vertical_svg__a"
      cx={18.001}
      cy={18.75}
      r={1.5}
    />
  );

export default SvgSettingsToggleVertical;
