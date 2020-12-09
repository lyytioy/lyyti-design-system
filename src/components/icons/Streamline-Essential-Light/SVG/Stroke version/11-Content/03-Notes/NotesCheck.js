import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-check_svg__a"
      d="M9.587 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.587 4.501v-4M8.587 4.501v-4M12.587 4.501v-4"
    />,
    <circle className="notes-check_svg__a" cx={17.587} cy={17.501} r={6} />,
    <path
      className="notes-check_svg__a"
      d="M20.261 15.756l-2.9 3.874a.751.751 0 01-1.131.08l-1.5-1.5"
    />
  );

export default SvgNotesCheck;
