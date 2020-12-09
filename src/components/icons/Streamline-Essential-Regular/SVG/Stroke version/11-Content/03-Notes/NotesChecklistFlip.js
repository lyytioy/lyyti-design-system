import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesChecklistFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-checklist-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="notes-checklist-flip_svg__a"
      x={0.75}
      y={2.25}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="notes-checklist-flip_svg__a"
      d="M5.25.75v3M18.75.75v3M12.75 18h4.5M12.75 10.5h4.5M9.9 15.3l-3.15 4.2-2.25-2.25M9.9 7.5l-3.15 4.2L4.5 9.45"
    />
  );

export default SvgNotesChecklistFlip;
