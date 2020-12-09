import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCalendar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-calendar_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-calendar_svg__a"
      d="M6 .5v5M12 .5v5M18 .5v5M20 2.5h2a1 1 0 011 1v19a1 1 0 01-1 1H2a1 1 0 01-1-1v-19a1 1 0 011-1h1.969"
    />,
    <path
      className="notes-calendar_svg__a"
      d="M4 7.5V20a.5.5 0 00.5.5h15a.5.5 0 00.5-.5V7.5M7.969 2.5H12M14 2.5h4"
    />
  );

export default SvgNotesCalendar;
