import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="app-window-type_svg__a"
      x={1.51}
      y={2.254}
      width={21}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="app-window-type_svg__a"
      d="M1.51 6.754h21M12.01 18.707V10.48M16.51 11.98v-.75a.75.75 0 00-.75-.75h-7.5a.75.75 0 00-.75.75v.75"
    />
  );

export default SvgAppWindowType;
