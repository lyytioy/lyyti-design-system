import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="notes-module_svg__a"
      x={14.25}
      y={11.25}
      width={4.5}
      height={4.5}
      rx={1}
      ry={1}
    />,
    <rect
      className="notes-module_svg__a"
      x={18.75}
      y={18.75}
      width={4.5}
      height={4.5}
      rx={1}
      ry={1}
    />,
    <rect
      className="notes-module_svg__a"
      x={9.75}
      y={18.75}
      width={4.5}
      height={4.5}
      rx={1}
      ry={1}
    />,
    <path
      className="notes-module_svg__a"
      d="M6.75 20.25h-4.5a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesModule;
