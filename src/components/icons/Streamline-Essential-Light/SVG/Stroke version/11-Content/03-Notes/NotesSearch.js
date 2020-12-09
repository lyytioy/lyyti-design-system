import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-search_svg__a"
      d="M9.5 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v6M4.5 4.5v-4M8.5 4.5v-4M12.5 4.5v-4"
    />,
    <circle
      className="notes-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="notes-search_svg__a" d="M23.5 23.5l-3.248-3.248" />
  );

export default SvgNotesSearch;
