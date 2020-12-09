import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-give_svg__a"
      d="M.75 14.25v9M.75 21.75h15a3 3 0 00-3-3H9a3 3 0 00-3-3H.75M6 18.75h3M23.25 12.643a1.557 1.557 0 01-1.5 1.607h-10.5a1.557 1.557 0 01-1.5-1.607V3.857a1.557 1.557 0 011.5-1.607h10.5a1.557 1.557 0 011.5 1.607zM14.25.75v4.5M18.75.75v4.5"
    />
  );

export default SvgNotesGive;
