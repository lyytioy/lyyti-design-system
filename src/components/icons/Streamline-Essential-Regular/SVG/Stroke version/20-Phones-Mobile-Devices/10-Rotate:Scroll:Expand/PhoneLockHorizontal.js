import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneLockHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-lock-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="phone-lock-horizontal_svg__a" d="M18 20.515v-3" />,
    <rect
      className="phone-lock-horizontal_svg__a"
      x={7.5}
      y={7.985}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-lock-horizontal_svg__a"
      d="M12 3.485a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM12 11.39a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="phone-lock-horizontal_svg__a"
      d="M19.5 8.515a3 3 0 013 3v6a3 3 0 01-3 3h-15a3 3 0 01-3-3v-6a3 3 0 013-3"
    />
  );

export default SvgPhoneLockHorizontal;
