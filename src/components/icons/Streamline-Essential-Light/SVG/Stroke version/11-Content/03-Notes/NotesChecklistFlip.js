import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesChecklistFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-checklist-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-checklist-flip_svg__a"
      d="M17.5 17.5a1 1 0 00-1 1v5h-14a1 1 0 01-1-1v-19a1 1 0 011-1h19a1 1 0 011 1v14zM22.5 17.5l-6 6M4.5.5V5M9.5.5V5M14.5.5V5M19.5.5V5"
    />,
    <path
      className="notes-checklist-flip_svg__a"
      d="M9.5 7.5l-3 3L5 9M9.5 13l-3 3L5 14.5M11.5 9.5H18M11.5 14.5H18"
    />
  );

export default SvgNotesChecklistFlip;
