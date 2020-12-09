import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-home_svg__a"
      d="M7.5 20.5h-6a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v7M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4M12.5 16.308V22.5a1 1 0 001 1h7a1 1 0 001-1v-6.192"
    />,
    <path
      className="notes-home_svg__a"
      d="M10.5 18l5.854-4.953a1 1 0 011.292 0L23.5 18M18.5 23.5h-3v-3a1.5 1.5 0 013 0z"
    />
  );

export default SvgNotesHome;
