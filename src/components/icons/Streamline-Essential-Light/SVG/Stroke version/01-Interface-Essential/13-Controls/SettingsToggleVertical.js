import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsToggleVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-toggle-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-toggle-vertical_svg__a"
      x={1.5}
      y={0.501}
      width={9}
      height={23}
      rx={2}
      ry={2}
    />,
    <rect
      className="settings-toggle-vertical_svg__a"
      x={13.5}
      y={0.501}
      width={9}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="settings-toggle-vertical_svg__a"
      d="M1.5 5.501h9M13.5 15.001h9"
    />,
    <circle
      className="settings-toggle-vertical_svg__a"
      cx={6}
      cy={19.001}
      r={1.5}
    />,
    <circle
      className="settings-toggle-vertical_svg__a"
      cx={18}
      cy={19.001}
      r={1.5}
    />
  );

export default SvgSettingsToggleVertical;
