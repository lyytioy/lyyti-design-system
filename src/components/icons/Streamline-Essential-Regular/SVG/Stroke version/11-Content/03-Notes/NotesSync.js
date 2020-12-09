import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-sync_svg__a"
      d="M15 18.75h-3.75v3.75M22.667 19.483a5.572 5.572 0 01-10.74-.733M19.5 15.75h3.75V12M11.833 15.017a5.572 5.572 0 0110.74.733"
    />,
    <path
      className="notes-sync_svg__a"
      d="M8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesSync;
