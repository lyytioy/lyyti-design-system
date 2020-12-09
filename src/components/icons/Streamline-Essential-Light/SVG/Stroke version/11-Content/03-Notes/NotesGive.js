import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-give_svg__a"
      d="M.5 15.5v8M.5 22.5h16a3 3 0 00-3-3h-8M.5 16.5h6a3 3 0 013 3M23.5 14.5a1 1 0 01-1 1H12.25a.75.75 0 01-.75-.75V3.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75zM14.5 4V.5M17.5 4V.5M20.5 4V.5"
    />
  );

export default SvgNotesGive;
