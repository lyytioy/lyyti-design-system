import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowMailAt = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-mail-at_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-mail-at_svg__a"
      x={1.51}
      y={2.253}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path className="app-window-mail-at_svg__a" d="M1.51 6.753h21" />,
    <circle
      className="app-window-mail-at_svg__a"
      cx={12.01}
      cy={14.253}
      r={1.5}
    />,
    <path
      className="app-window-mail-at_svg__a"
      d="M12.01 18.753a4.5 4.5 0 114.5-4.5v1.5a1.5 1.5 0 01-3 0v-1.5"
    />
  );

export default SvgAppWindowMailAt;
