import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="notes-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1}
      ry={1}
    />,
    <path
      className="notes-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375M9.75 20.25h-7.5a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesLock;
