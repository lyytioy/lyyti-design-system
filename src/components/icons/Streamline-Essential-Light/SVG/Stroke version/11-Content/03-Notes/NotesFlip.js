import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesFlip = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-flip_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-flip_svg__a"
      d="M17.5 17.5a1 1 0 00-1 1v5h-14a1 1 0 01-1-1v-19a1 1 0 011-1h19a1 1 0 011 1v14zM22.5 17.5l-6 6M4.5.5V5M9.5.5V5M14.5.5V5M19.5.5V5"
    />
  );

export default SvgNotesFlip;
