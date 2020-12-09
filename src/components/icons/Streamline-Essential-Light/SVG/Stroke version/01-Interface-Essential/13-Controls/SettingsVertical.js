import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSettingsVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".settings-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="settings-vertical_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path className="settings-vertical_svg__a" d="M12 13V4.5M12 19.5V17" />,
    <circle className="settings-vertical_svg__a" cx={12} cy={15} r={2} />,
    <path className="settings-vertical_svg__a" d="M6.5 12v7.5M6.5 4.5V8" />,
    <circle className="settings-vertical_svg__a" cx={6.5} cy={10} r={2} />,
    <path className="settings-vertical_svg__a" d="M17.5 12v7.5M17.5 4.5V8" />,
    <circle className="settings-vertical_svg__a" cx={17.5} cy={10} r={2} />
  );

export default SvgSettingsVertical;
