import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-calendar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="notes-calendar_svg__a"
      x={0.751}
      y={2.25}
      width={22.499}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="notes-calendar_svg__a"
      d="M6.751.75v3M17.249.75v3M19.5 6.75v8.379a1.5 1.5 0 01-.44 1.06l-3.62 3.622a1.5 1.5 0 01-1.061.439H5.251V6.75z"
    />,
    <path
      className="notes-calendar_svg__a"
      d="M19.5 14.25h-3.75a1.5 1.5 0 00-1.5 1.5v4.5"
    />
  );

export default SvgNotesCalendar;
