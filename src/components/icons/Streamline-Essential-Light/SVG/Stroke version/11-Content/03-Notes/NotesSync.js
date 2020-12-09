import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-sync_svg__a"
      d="M8.5 20.5h-7a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4M15 18.5h-3.5V22M22.917 19.733A5.572 5.572 0 0112.1 18.5M20 16.5h3.5V13M12.083 15.267A5.572 5.572 0 0122.9 16.5"
    />
  );

export default SvgNotesSync;
