import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-module_svg__a"
      d="M10.5 20.5h-9a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v7M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <rect
      className="notes-module_svg__a"
      x={19.5}
      y={19.5}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="notes-module_svg__a"
      x={13.5}
      y={19.5}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="notes-module_svg__a"
      x={16.5}
      y={13.5}
      width={4}
      height={4}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgNotesModule;
