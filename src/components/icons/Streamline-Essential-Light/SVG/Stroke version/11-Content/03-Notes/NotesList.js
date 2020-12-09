import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesList = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-list_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-list_svg__a"
      d="M15.5 12.5a1 1 0 00-1 1v6h-11a1 1 0 01-1-1v-17a1 1 0 011-1h17a1 1 0 011 1v11zM21.5 12.5l-7 7M3 21.5h16.5M3 23.5h16.5"
    />
  );

export default SvgNotesList;
