import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesFlip1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-flip-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-flip-1_svg__a"
      d="M15.5 13.5a1 1 0 00-1 1v5h-10a1 1 0 01-1-1v-15a1 1 0 011-1h15a1 1 0 011 1v10zM20.5 13.5l-6 6M7.5.5v4M11.5.5v4M15.5.5v4M3.5 21.5h15M3.5 23.5h15"
    />
  );

export default SvgNotesFlip1;
